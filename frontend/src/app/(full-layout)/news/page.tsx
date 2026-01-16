import { Card } from "@/components/card/card";
import { CardBody } from "@/components/card/card-body/card-body";
import { CardHeader } from "@/components/card/card-header/card-header";
import { Grid } from "@/components/ui/grid/grid";
import { ImageContainer } from "@/components/ui/image/image";
import type { PaginatedNewsResponse } from "../../../types/responses/news-response";
import { fetchApi } from "@/utils/fetch/backend-fetch"

export default async function NewsPage() {
  // fetch data server-side; adjust endpoint as needed
  const response = await fetchApi<PaginatedNewsResponse>("/news");
  const responseData = (response as any)?.results ?? (response as any)?.data ?? [];

  const res = await fetchApi<PaginatedNewsResponse>("/news");
  console.log("API response:", res);

  return (
    <section className="max-w-5xl mx-auto p-8 space-y-8">
      
      <header>
        <h1 className="text-4xl font-bold">News</h1>
        <p className="text-muted-foreground">
          Latest updates, announcements, and development progress.
        </p>
      </header>
        <Grid className="py-2xl">
      {responseData.map((news: any) => (
        <Card key={news.id} slug={`news/${news.subtitle ?? ""}`}>
          <CardHeader
            title={news.title}
            subtitle={news.subtitle}
            description={news.description}

          />
          <CardBody>
            {news.cover_image?.url ? (
            <ImageContainer
              src={news.cover_image.url}
              alt={news.cover_image?.name ?? ""}
            />
            ) : null}
          </CardBody>
        </Card>
      ))}
    </Grid>

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
