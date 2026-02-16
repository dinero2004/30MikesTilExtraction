"use server";

import { auth } from "@/auth/auth";
import { fetchApi } from "@/utils/fetch/backend-fetch";

interface UpdateNewsData {
  id: number;
  title?: string;
  subtitle?: string;
  description?: string;
  image?: File | null;     // allow updating image
  image_id?: number;       // fallback if already uploaded
}

interface UpdateNewsResult {
  success: boolean;
  error?: string;
  data?: unknown;
}

export async function updateNewsAction(
  formData: UpdateNewsData
): Promise<UpdateNewsResult> {
  try {
    const session = await auth();

    console.log("UPDATE TOKEN:", session?.accessToken);

    if (!session?.accessToken) {
      return {
        success: false,
        error: "Unauthorized",
      };
    }

    const { id, image, ...rest } = formData;

    let imageId = rest.image_id ?? null;

    /* -------------------------
       1️⃣ Upload new image (optional)
    -------------------------- */
    if (image) {
      const uploadData = new FormData();
      uploadData.append("files[]", image);
      uploadData.append("type", "news");
      uploadData.append("title", rest.title ?? "");

      const uploadResponse = await fetch(
        `${process.env.BACKEND_URL}/api/uploads`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${session.accessToken}`,
            Accept: "application/json",
          },
          body: uploadData,
        }
      );

      console.log("UPLOAD STATUS:", uploadResponse.status);

      const raw = await uploadResponse.text();
      console.log("UPLOAD RAW:", raw);

      if (!uploadResponse.ok) {
        return {
          success: false,
          error: "Image upload failed",
        };
      }

      const parsed = JSON.parse(raw);
      imageId = parsed?.images?.[0]?.id ?? null;
    }

    /* -------------------------
       2️⃣ Update news
    -------------------------- */
    const result = await fetchApi(`news/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
      },
      body: JSON.stringify({
        ...rest,
        image_id: imageId,
      }),
    });

    console.log("UPDATE RESULT:", result);

    if (result.error) {
      return {
        success: false,
        error: result.error,
      };
    }

    return {
      success: true,
      data: result.data,
    };

  } catch (error) {
    console.error("Update news action error:", error);

    return {
      success: false,
      error: "Unexpected error while updating news",
    };
  }
}
