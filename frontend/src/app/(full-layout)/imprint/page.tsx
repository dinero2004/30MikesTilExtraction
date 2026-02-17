export default function ImprintPage() {
  return (
    <section className="max-w-3xl mx-auto p-8 space-y-6 font-roboto">
      <h1 className="text-4xl font-bold">Imprint</h1>

      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Responsible for the content</h2>
        <p className="text-muted-foreground">
          8 Slice Games / Lazar Minkov<br />
          Scheunerweg 38<br />
          3063 Itigen<br />
          Switzerland
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Contact</h2>
        <p className="text-muted-foreground">
          Email: 8slicegames@gmail.com<br />
          Phone: +41 78 234 80 28
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Disclaimer</h2>
        <p className="text-sm text-muted-foreground">
          The contents of this website are created with the greatest possible care.
          However, we do not guarantee the accuracy, completeness, or timeliness of the content.
        </p>
      </div>
    </section>
  )
}
