export default function NewsPage() {
  return (
    <section className="max-w-5xl mx-auto p-8 space-y-8">
      <header>
        <h1 className="text-4xl font-bold">News</h1>
        <p className="text-muted-foreground">
          Latest updates, announcements, and development progress.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        <article className="rounded-lg border p-5 space-y-2">
          <h2 className="text-xl font-semibold">Development Update</h2>
          <p className="text-sm text-muted-foreground">
            A short summary of the latest changes and improvements.
          </p>
          <span className="text-xs text-muted-foreground">
            Published · 2026-01-07
          </span>
        </article>

        <article className="rounded-lg border p-5 space-y-2">
          <h2 className="text-xl font-semibold">Feature Spotlight</h2>
          <p className="text-sm text-muted-foreground">
            Highlighting a core system currently in development.
          </p>
          <span className="text-xs text-muted-foreground">
            Published · 2026-01-01
          </span>
        </article>
      </div>
    </section>
  )
}
