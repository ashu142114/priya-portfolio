import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Priya K. Lakkad — UI/UX & Product Designer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#FFF8F5",
          padding: "60px 80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "10px 24px",
              borderRadius: "9999px",
              backgroundColor: "#F8D7DF",
              color: "#D9577B",
              fontSize: "20px",
              fontWeight: 600,
            }}
          >
            UI/UX & Product Designer
          </div>
          <div style={{ fontSize: "20px", color: "#8F7B98", fontWeight: 500 }}>
            Surat, Gujarat, India
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: "64px",
              fontWeight: 800,
              color: "#2B1B2E",
              letterSpacing: "-1px",
              lineHeight: 1.1,
            }}
          >
            Priya K. Lakkad
          </div>
          <div
            style={{
              fontSize: "30px",
              color: "#594660",
              maxWidth: "900px",
              lineHeight: 1.35,
            }}
          >
            Designing simple, caring digital experiences for healthcare, SaaS, and e-commerce.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "24px",
            borderTop: "2px solid #F8D7DF",
          }}
        >
          <div style={{ display: "flex", gap: "16px" }}>
            {["Healthcare", "SaaS", "E-commerce", "Event Management"].map((domain) => (
              <div
                key={domain}
                style={{
                  padding: "8px 18px",
                  borderRadius: "9999px",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #F8D7DF",
                  color: "#2B1B2E",
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
                {domain}
              </div>
            ))}
          </div>
          <div style={{ fontSize: "22px", fontWeight: 700, color: "#D9577B" }}>
            priyalakkad.design
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
