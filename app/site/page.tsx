export default async function Home() {
  return (
    <main className="h-full w-full pt-36 relative flex items-center justify-center flex-col">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      {/* Tagline */}
      <p className="text-center text-lg font-medium">
        Run your agency, in one place
      </p>

      {/* Title */}
      <div className="bg-gradient-to-r from-primary via-purple-500 to-secondary-foreground text-transparent bg-clip-text">
        <h1 className="text-6xl md:text-[300px] font-bold text-center">
          Plura
        </h1>
      </div>
      <div className="bg-gradient-to-r from-primary via-blue-500 to-secondary-foreground text-transparent bg-clip-text">
        <h1 className="text-6xl md:text-[300px] font-bold text-center">
          Minati
        </h1>
      </div>
    </main>
  );
}
