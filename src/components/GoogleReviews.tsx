import { MAPS_URL } from "@/lib/seo";

const reviews = [
  {
    name: "Saira Riaz",
    meta: "Google review",
    text: "I recently booked a 3 days Murree tour with Perdesi Tours, and it was truly an unforgettable experience. As a solo female traveler, I was initially a bit nervous, but from the very beginning, everything felt safe, secure, and perfectly managed. Special thanks to Maryam, the owner, who personally ensured that every detail was taken care of with professionalism and genuine care. From transportation to accommodation and sightseeing, everything was seamless and stress-free. Her dedication made me feel completely comfortable and confident throughout the trip. I loved their services, and I can confidently say that Perdesi Tours is the best choice for anyone looking for a safe, enjoyable, and well organized travel experience. Highly recommended.",
  },
  {
    name: "Rehman Shah",
    meta: "Google review",
    text: "Recently I traveled with Perdesi Tours and had a great experience. The trip was well organized, transportation was comfortable, and the management team was cooperative throughout the journey. Everything was handled professionally, making the tour enjoyable and stress-free. Highly recommended for anyone looking for a memorable travel experience.",
  },
  {
    name: "Salman Kamboh",
    meta: "Google review",
    text: "Thanks Pardasi Tour for wonderful journey. Paisa wasool trip thi, 10/10. Gaye 2 din ke liye, dil wahin reh gaya. Hotel saaf suthra tha aur staff bohot cooperative tha. Khana ghar jaisa tha. Family ke saath jane wali jaga hai. Rating: 10/10 Highly Recommended! Ye trip zindagi mein yaad reh jayegi.",
  },
  {
    name: "Muhammad Naeem",
    meta: "Google review",
    text: "One of the best travel experiences we've had! The management was excellent, the hotels were comfortable, and the entire journey was smooth and enjoyable. We felt safe throughout the trip. Highly recommended for family tours.",
  },
] as const;

export function GoogleReviews() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-secondary/40 border-y border-border/60">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold tracking-[0.22em] uppercase text-[11px] mb-3 block">
            Kind Words
          </span>
          <h2 className="text-4xl font-display">From our travelers</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {reviews.map((review) => (
            <figure
              key={review.name}
              className="bg-card p-8 rounded-2xl border border-border/60 shadow-sm flex flex-col h-full min-h-[280px]"
            >
              <blockquote className="font-sans text-[15px] sm:text-base font-normal not-italic leading-relaxed text-foreground/80 line-clamp-6">
                &quot;{review.text}&quot;
              </blockquote>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-accent hover:underline w-fit"
              >
                See more
              </a>
              <figcaption className="mt-auto pt-6">
                <div className="font-semibold text-sm">{review.name}</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-foreground/50 mt-1">
                  {review.meta}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
