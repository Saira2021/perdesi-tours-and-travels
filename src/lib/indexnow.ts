import { SITE_URL } from "@/lib/site";

export const INDEXNOW_KEY = "c7e19a4f8b2d46c1a90e5f3b7d1c84e2";

let lastSubmitAt = 0;

export async function submitIndexNow(urls: string[]) {
  if (process.env.NODE_ENV !== "production") return;
  if (!SITE_URL.includes("perdesitours.com")) return;
  if (Date.now() - lastSubmitAt < 24 * 60 * 60 * 1000) return;
  lastSubmitAt = Date.now();

  try {
    await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host: "perdesitours.com",
        key: INDEXNOW_KEY,
        keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
        urlList: urls,
      }),
    });
  } catch {
    // IndexNow is best-effort; never block sitemap generation.
  }
}
