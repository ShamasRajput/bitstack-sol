import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";
export const dynamic = "force-static";

export async function GET() {
  const image = await readFile(
    path.join(process.cwd(), "public/assets/bitstack-logo.png"),
  );
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#FFFDF6",
        color: "#241714",
        padding: "45px 70px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderBottom: "18px solid #6B352A",
      }}
    >
      {/* The supplied transparent logo is embedded locally; no external fetch is needed. */}
      <img
        src={`data:image/png;base64,${image.toString("base64")}`}
        width={510}
        height={170}
        alt="Bitstack Solutions"
      />
      <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
        <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.08 }}>
          Websites, workflow automation &amp; API integrations.
        </div>
        <div style={{ fontSize: 27, color: "#6B352A" }}>
          A technical project starts with a conversation.
        </div>
      </div>
    </div>,
    { width: 1200, height: 630 },
  );
}
