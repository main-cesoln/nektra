import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt =
  "Nektra Energy Solutions — Authorized Exide Industrial Battery Dealer in Hyderabad";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  // Read logo as base64
  const logoData = readFileSync(join(process.cwd(), "logo", "nektra-logo.png"));
  const logoBase64 = `data:image/png;base64,${logoData.toString("base64")}`;

  // Load fonts
  const [syneBold, spaceGroteskMedium] = await Promise.all([
    fetch(
      "https://fonts.googleapis.com/css2?family=Syne:wght@700&display=swap",
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko)",
        },
      }
    )
      .then((res) => res.text())
      .then((css) => {
        const url = css.match(/src: url\((.+?)\)/)?.[1];
        return url ? fetch(url).then((r) => r.arrayBuffer()) : null;
      }),
    fetch(
      "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500&display=swap",
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko)",
        },
      }
    )
      .then((res) => res.text())
      .then((css) => {
        const url = css.match(/src: url\((.+?)\)/)?.[1];
        return url ? fetch(url).then((r) => r.arrayBuffer()) : null;
      }),
  ]);

  const fonts: {
    name: string;
    data: ArrayBuffer;
    style: "normal";
    weight: 700 | 500;
  }[] = [];
  if (syneBold)
    fonts.push({ name: "Syne", data: syneBold, style: "normal", weight: 700 });
  if (spaceGroteskMedium)
    fonts.push({
      name: "Space Grotesk",
      data: spaceGroteskMedium,
      style: "normal",
      weight: 500,
    });

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#FFFFFF",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "5px",
            background:
              "linear-gradient(90deg, #00E5FF 0%, #00B8D4 60%, #0091EA 100%)",
          }}
        />

        {/* Subtle background pattern */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "radial-gradient(circle at 20% 50%, rgba(0,229,255,0.04) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(0,229,255,0.03) 0%, transparent 50%)",
          }}
        />

        {/* Logo */}
        <img
          src={logoBase64}
          width={500}
          height={199}
          style={{
            marginBottom: "32px",
          }}
        />

        {/* Tagline */}
        <span
          style={{
            fontSize: "28px",
            fontFamily: spaceGroteskMedium ? "Space Grotesk" : "sans-serif",
            fontWeight: 500,
            color: "#00B8D4",
            marginBottom: "32px",
            lineHeight: 1.4,
            letterSpacing: "2px",
          }}
        >
          Powering Industries. Enabling Reliability.
        </span>

        {/* Separator */}
        <div
          style={{
            width: "120px",
            height: "3px",
            background:
              "linear-gradient(90deg, transparent, #00E5FF, transparent)",
            marginBottom: "32px",
          }}
        />

        {/* Subtitle */}
        <span
          style={{
            fontSize: "22px",
            fontFamily: spaceGroteskMedium ? "Space Grotesk" : "sans-serif",
            fontWeight: 500,
            color: "#374151",
            marginBottom: "10px",
          }}
        >
          Authorized Exide Industrial Battery Dealer
        </span>

        {/* Location */}
        <span
          style={{
            fontSize: "18px",
            fontFamily: spaceGroteskMedium ? "Space Grotesk" : "sans-serif",
            fontWeight: 500,
            color: "#6B7280",
          }}
        >
          Hyderabad, Telangana • 35+ Years of Expertise
        </span>

        {/* Bottom accent bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "5px",
            background:
              "linear-gradient(90deg, #0091EA 0%, #00B8D4 40%, #00E5FF 100%)",
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts,
    }
  );
}
