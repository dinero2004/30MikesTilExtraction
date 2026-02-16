/**
 * Standard response structure for API calls
 */
export interface ApiResponse<T> {
  data: T | null;
  error: string | null;
  statusCode: number;
}

export async function fetchApi<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {

  const baseUrl = process.env.BACKEND_URL;
  const url = `${baseUrl}/api/${endpoint.replace(/^\/+/, "")}`;

  console.log("FETCH URL:", url);

  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        ...(options.headers || {}),
      },
    });

    const statusCode = response.status;
    const text = await response.text();

    console.log("STATUS:", statusCode);
    console.log("RAW RESPONSE:", text);

    let parsed: T | null = null;

    try {
      parsed = text ? JSON.parse(text) : null;
    } catch {
      return {
        data: null,
        error: `Invalid JSON response (${statusCode})`,
        statusCode,
      };
    }

    if (!response.ok) {
      return {
        data: null,
        error: (parsed as any)?.message || `Request failed (${statusCode})`,
        statusCode,
      };
    }

    return {
      data: parsed,
      error: null,
      statusCode,
    };

  } catch (error) {
    console.error("NETWORK ERROR:", error);

    return {
      data: null,
      error: error instanceof Error ? error.message : "Network error",
      statusCode: 0,
    };
  }
}

