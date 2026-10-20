import { fallbackReviews, type Review } from "@/data/reviews";

export type ReviewsData = {
  reviews: Review[];
  rating?: number;
  total?: number;
  placeId?: string;
};

type PlacesResponse = {
  rating?: number;
  userRatingCount?: number;
  reviews?: {
    rating?: number;
    relativePublishTimeDescription?: string;
    text?: { text?: string };
    originalText?: { text?: string };
    authorAttribution?: { displayName?: string; photoUri?: string };
  }[];
};

/**
 * Busca as avaliações no Google Places API (New).
 * Requer GOOGLE_PLACES_API_KEY e GOOGLE_PLACE_ID no ambiente.
 * A API devolve no máximo 5 avaliações; o resultado fica em cache por ~6 meses.
 */
export async function getReviews(): Promise<ReviewsData> {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (key && placeId) {
    try {
      const res = await fetch(
        `https://places.googleapis.com/v1/places/${placeId}?languageCode=pt-BR`,
        {
          headers: {
            "X-Goog-Api-Key": key,
            "X-Goog-FieldMask": "rating,userRatingCount,reviews",
          },
          next: { revalidate: 60 * 60 * 24 * 182 },
        },
      );
      if (res.ok) {
        const data = (await res.json()) as PlacesResponse;
        const reviews: Review[] = (data.reviews ?? [])
          .map((r) => ({
            author: r.authorAttribution?.displayName ?? "Paciente",
            rating: r.rating ?? 5,
            text: (r.text?.text ?? r.originalText?.text ?? "").trim(),
            when: r.relativePublishTimeDescription,
            photo: r.authorAttribution?.photoUri,
          }))
          .filter((r) => r.text);
        if (reviews.length) {
          return {
            reviews,
            rating: data.rating,
            total: data.userRatingCount,
            placeId,
          };
        }
      }
    } catch {
      /* cai para as avaliações de reserva */
    }
  }

  return { reviews: fallbackReviews, placeId };
}
