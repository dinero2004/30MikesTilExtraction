export default function ImprintPage() {
  return (
    <section className="max-w-3xl mx-auto p-8 space-y-6">
      <h1 className="text-4xl font-bold">Imprint</h1>

      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Responsible for the content</h2>
        <p className="text-muted-foreground">
          Your Project / Company Name<br />
          Street Address<br />
          ZIP Code City<br />
          Country
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Contact</h2>
        <p className="text-muted-foreground">
          Email: contact@example.com<br />
          Phone: +41 00 000 00 00
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
