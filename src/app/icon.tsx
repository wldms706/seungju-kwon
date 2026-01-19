import { ImageResponse } from "next/og";

export const runtime = "edge";
export const contentType = "image/png";
export const size = { width: 48, height: 48 };

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#E8B4B8",
          borderRadius: "9px",
        }}
      >
        <span
          style={{
            fontSize: "32px",
            fontFamily: "Georgia, serif",
            fontWeight: 600,
            color: "#ffffff",
          }}
        >
          K
        </span>
      </div>
    ),
    {
      ...size,
    }
  );
}
