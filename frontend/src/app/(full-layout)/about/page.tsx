export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto px-8 py-16 space-y-12">
      
      {/* TITLE */}
      <h1 className="text-4xl font-bold">Our Team</h1>

      {/* TEAM IMAGE */}
      <div className="flex justify-center">
        <img
          src="/images/about.png"
          alt="Our team group photo"
          className="w-full max-w-3xl rounded-lg shadow-lg"
        />
      </div>

      {/* TEXT CONTENT */}
      <div className="space-y-10">

        {/* GOAL */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Goal</h2>
          <p className="text-sm text-muted-foreground max-w-2xl">
            We aim to create immersive cooperative shooters that challenge
            communication and strategy.
          </p>
          <p className="text-sm text-muted-foreground max-w-2xl mt-2">
            Our long-term goal is to evolve 30 Mikes Till Extraction into a
            community-driven tactical experience.
          </p>
        </div>

        {/* VISION */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Vision</h2>
          <p className="text-sm text-muted-foreground max-w-2xl">
            We aim to create immersive cooperative shooters that challenge
            communication and strategy, while fostering teamwork and long-term
            player engagement.
          </p>
        </div>

        {/* PHILOSOPHY */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Philosophy</h2>
          <p className="text-sm text-muted-foreground max-w-2xl">
            Our philosophy is rooted in meaningful player choice, tactical
            decision-making, and immersive world-building that rewards
            coordination and adaptability.
          </p>
        </div>

      </div>
    </section>
  )
}
