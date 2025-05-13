/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'uploadthing.com',
            },
            {
                protocol: 'https',
                hostname: 'utfs.io',
            },
            {
                protocol: 'https',
                hostname: 'img.clerk.com',
            },
            {
                protocol: 'https',
                hostname: 'subdomain',
            },
            {
                protocol: 'https',
                hostname: 'files.stripe.com',
            },
        ],
    },
    reactStrictMode: true, // Enable React Strict Mode
    experimental: {
        // Add any experimental features you want to try
    },
    typescript: {
        ignoreBuildErrors: false, // Enable type checking during builds
    },
}

export default nextConfig
