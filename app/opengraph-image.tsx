import { ImageResponse } from "next/og";

export const alt =
  "Nektra Energy Solutions — Authorized Exide Industrial Battery Dealer in Hyderabad";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
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

  const fonts: { name: string; data: ArrayBuffer; style: "normal"; weight: 700 | 500 }[] = [];
  if (syneBold) fonts.push({ name: "Syne", data: syneBold, style: "normal", weight: 700 });
  if (spaceGroteskMedium)
    fonts.push({ name: "Space Grotesk", data: spaceGroteskMedium, style: "normal", weight: 500 });

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "60px 80px",
          background: "linear-gradient(135deg, #0A0A0F 0%, #14141F 50%, #1A1A2E 100%)",
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
            height: "4px",
            background: "linear-gradient(90deg, #00E5FF 0%, #00E5FF 60%, transparent 100%)",
          }}
        />

        {/* Radial glow behind logo area */}
        <div
          style={{
            position: "absolute",
            top: "120px",
            left: "20px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,229,255,0.08) 0%, transparent 70%)",
          }}
        />

        {/* Subtle corner accent */}
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            right: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,229,255,0.05) 0%, transparent 70%)",
          }}
        />

        {/* Logo + Company Name row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "28px",
            marginBottom: "24px",
          }}
        >
          {/* Lightning bolt logo */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "80px",
              height: "80px",
              borderRadius: "18px",
              background: "#0A0A0F",
              border: "2px solid rgba(0,229,255,0.3)",
              boxShadow: "0 0 30px rgba(0,229,255,0.15)",
              flexShrink: 0,
            }}
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 512 512"
              fill="none"
            >
              <path
                d="M280 48L144 288h104l-32 176 168-256H272l40-160z"
                fill="#00E5FF"
                stroke="#00E5FF"
                strokeWidth="8"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Company name */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2px",
            }}
          >
            <span
              style={{
                fontSize: "52px",
                fontFamily: syneBold ? "Syne" : "sans-serif",
                fontWeight: 700,
                color: "#FFFFFF",
                lineHeight: 1.1,
                letterSpacing: "-1px",
              }}
            >
              Nektra Energy Solutions
            </span>
          </div>
        </div>

        {/* Tagline */}
        <span
          style={{
            fontSize: "26px",
            fontFamily: spaceGroteskMedium ? "Space Grotesk" : "sans-serif",
            fontWeight: 500,
            color: "#00E5FF",
            marginBottom: "28px",
            lineHeight: 1.4,
          }}
        >
          Powering Industries. Enabling Reliability.
        </span>

        {/* Separator line */}
        <div
          style={{
            width: "200px",
            height: "2px",
            background: "linear-gradient(90deg, #00E5FF, transparent)",
            marginBottom: "28px",
          }}
        />

        {/* Subtitle */}
        <span
          style={{
            fontSize: "22px",
            fontFamily: spaceGroteskMedium ? "Space Grotesk" : "sans-serif",
            fontWeight: 500,
            color: "#9CA3AF",
            marginBottom: "8px",
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
          Hyderabad, Telangana
        </span>

        {/* Bottom accent bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "2px",
            background: "linear-gradient(90deg, transparent 0%, #00E5FF 50%, transparent 100%)",
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
