import Link from "next/link";

export default function Home() {
  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px" }}>
      <header style={{ marginBottom: 28 }}>
        <h1 style={{ fontSize: 40, margin: 0 }}>Versus with Verses</h1>
        <p style={{ marginTop: 12, fontSize: 18, lineHeight: 1.5 }}>
          Scripture memorization through repetition and friendly challenge.
        </p>
      </header>

      <section style={{ display: "grid", gap: 16 }}>
        <div style={{ padding: 16, border: "1px solid #333", borderRadius: 12 }}>
          <h2 style={{ marginTop: 0, marginBottom: 8, fontSize: 20 }}>Start</h2>
          <p style={{ marginTop: 0, marginBottom: 12, lineHeight: 1.5 }}>
            Build a short list of memory verses, then practice them daily.
          </p>

          <Link
            href="/memory"
            style={{
              display: "inline-block",
              padding: "10px 14px",
              border: "1px solid #333",
              borderRadius: 10,
              textDecoration: "none",
            }}
          >
            Go to My Memory Verses →
          </Link>
        </div>

        <div style={{ padding: 16, border: "1px solid #333", borderRadius: 12 }}>
          <h2 style={{ marginTop: 0, marginBottom: 8, fontSize: 20 }}>Translations</h2>
          <p style={{ marginTop: 0, marginBottom: 0, lineHeight: 1.5 }}>
            Starting with NASB and NIV. Verse text is fetched on demand.
          </p>
        </div>
      </section>
    </main>
  );
}
