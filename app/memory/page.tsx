export default function MemoryPage() {
  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px" }}>
      <h1 style={{ marginTop: 0 }}>My Memory Verses</h1>
      <p style={{ lineHeight: 1.5 }}>
        This will show your list of verse references and practice progress.
      </p>

      <div style={{ marginTop: 16, padding: 16, border: "1px solid #333", borderRadius: 12 }}>
        <p style={{ margin: 0 }}>
          Placeholder: no data yet. Next step is to store verse references locally and fetch text on demand.
        </p>
      </div>
    </main>
  );
}
