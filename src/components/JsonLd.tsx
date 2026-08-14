export function JsonLd({ data }: { data: unknown }) {
  const payload = Array.isArray(data) ? data : [data];
  const graph = {
    "@context": "https://schema.org",
    "@graph": payload,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
