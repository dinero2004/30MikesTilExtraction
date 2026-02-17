import { Card } from "@/components/card/card";
import { CardBody } from "@/components/card/card-body/card-body";
import { CardHeader } from "@/components/card/card-header/card-header";
import { Grid } from "@/components/ui/grid/grid";
import { ImageContainer } from "@/components/ui/image/image";
import type { PaginatedNewsResponse } from "@/types/responses/news-response";
import { fetchApi } from "@/utils/fetch/backend-fetch";

export default async function NewsPage() {
  const response = await fetchApi<PaginatedNewsResponse>("news");
  const newsList = response.data?.data ?? [];

  return (
    <section
      className="
      min-h-screen h-full
      bg-[url('/images/background.png')]
      bg-no-repeat mx-auto px-8 py-16 space-y-12 text-white"
    >
      <header>
        <h1 className="text-4xl font-bold">News</h1>
        <p className="text-muted-foreground">
          Latest updates, announcements, and development progress.
        </p>
      </header>

      {newsList.length === 0 ? (
        <p className="text-muted-foreground">No news available.</p>
      ) : (
        <Grid className="py-2xl">
          {newsList.map((news) => (
            <Card key={news.id} slug={`/news/${news.slug}`}>
              <CardHeader
                title={news.title}
                subtitle={news.subtitle}
                description={news.description}
              />

              {news.cover_image?.url && (
                <CardBody>
                  <div style={{ position: "relative", width: "100%", height: "300px" }}>
                    <ImageContainer
                      src={
                        news.cover_image.url.startsWith("http")
                          ? news.cover_image.url
                          : `${process.env.BACKEND_URL}${news.cover_image.url}`
                      }
                      alt={news.title}
                      className="object-cover"
                    />
                  </div>
                </CardBody>
                
              )}
            </Card>
          ))}
        </Grid>
      )}
    </section>
  );
}
