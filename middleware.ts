import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Add your public routes here
const isPublicRoute = createRouteMatcher([
  //   "/sign-in(.*)",
  //   "/sign-up(.*)",
  "/",
  "/site",
  "/api/uploadthing",
  "/about", // Example: Add `/about` as a public route
  "/contact", // Example: Add `/contact` as a public route
]);

export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) {
    await auth.protect();
  }

  // Define beforeAuth and afterAuth functions if needed
  const beforeAuth = async (auth: any, req: any) => {
    // Your logic here
  };

  const afterAuth = async (auth: any, req: any) => {
    // Your logic here
  };

  // Call beforeAuth and afterAuth if needed
  await beforeAuth(auth, req);
  await afterAuth(auth, req);

  // Rewrite for domains
  const url = req.nextUrl;
  const searchParams = url.searchParams.toString();
  const hostname = req.headers.get("host");

  const pathWithSearchParams = `${url.pathname}${
    searchParams.length > 0 ? `?${searchParams}` : ""
  }`;

  // If subdomain exists
  const customSubdomain = hostname
    ?.split(`.${process.env.NEXT_PUBLIC_DOMAIN}`)
    .filter(Boolean)[0];

  if (customSubdomain) {
    return NextResponse.rewrite(
      new URL(`/${customSubdomain}${pathWithSearchParams}`)
    );
  }

  if (url.pathname === "/sign-in" || url.pathname === "/sign-up") {
    return NextResponse.redirect(new URL(`/agency/sign-in`, req.url));
  }

  if (
    url.pathname == "/" ||
    (url.pathname === "/site" && url.host == process.env.NEXT_PUBLIC_DOMAIN)
  ) {
    return NextResponse.rewrite(new URL("/site", req.url));
  }

  if (
    url.pathname.startsWith("/agency") ||
    url.pathname.startsWith("/subaccount")
  ) {
    return NextResponse.rewrite(new URL(`${pathWithSearchParams}`, req.url));
  }
  // Additional logic for handling subdomains can be added here
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
