export const deluxeDestinations = [
  {
    id: "naran",
    slug: "naran-kaghan-3-days",
    name: "Naran",
    title: "3 Days Naran Trip",
    valley: "Kaghan Valley",
  },
  {
    id: "kalam",
    slug: "swat-kalam-3-days",
    name: "Kalam",
    title: "3 Days Kalam Trip",
    valley: "Swat Valley",
  },
  {
    id: "kashmir",
    slug: "kashmir-valley-3-days",
    name: "Kashmir",
    title: "3 Days Kashmir Trip",
    valley: "Neelum Valley",
  },
] as const;

export const deluxeCouplesPrice = "PKR 185,000";
export const deluxeGroupPrice = "PKR 205,000";

export function deluxeWhatsAppUrl(destination?: string) {
  const trip = destination ?? "a Private Deluxe 3-day tour (Naran / Kalam / Kashmir)";
  return (
    "https://wa.me/923364572568?text=" +
    encodeURIComponent(
      `Hi Maryam, I visited perdesitours.com and I'm interested in ${trip}. Please share the private deluxe tour details.`,
    )
  );
}
