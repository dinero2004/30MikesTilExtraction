import { auth } from "@/auth";
import { EditNews } from "@/components/edit-news/edit-news";
import type { PaginatedNewsResponse } from "@/types/responses/news-response";
import { fetchApi } from "@/utils/fetch/backend-fetch";
import { notFound } from "next/navigation";
interface EditNewsPageProps {
  params: Promise<{ slug: string }>;
}

export default async function EditNewsPage({ params }: EditNewsPageProps) {
  const { slug } = await params; // 🔥 must await

  const session = await auth();
  if (!session?.user?.id) {
    notFound();
  }

  const response = await fetchApi<PaginatedNewsResponse>(
  `news?slug=${slug}`,
  { cache: "no-store" }
);

  const news = response.data?.data?.[0];

  if (!news) {
    notFound();
  }

  if (news.user_id !== Number(session.user.id)) {
    notFound();
  }

  return <EditNews data={news} />;
}
