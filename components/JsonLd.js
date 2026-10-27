// Renders JSON-LD structured data inside a <script type="application/ld+json"> block.
// Values are JSON.stringified with "<" escaped so the block cannot break out of
// the surrounding HTML or inject scripts.
export default function JsonLd({ data }) {
  const json = JSON.stringify(data, (key, value) => {
    if (typeof value === "string") {
      return value.replace(/</g, "\\u003c").replace(/>/g, "\\u003e");
    }
    return value;
  });

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
  );
}
