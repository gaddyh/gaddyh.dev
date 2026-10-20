import type { Metadata } from "next";

const whatsappUrl =
  "https://wa.me/972559937256?text=" +
  encodeURIComponent("היי, אני רוצה להצטרף לאקו גארד");

export const metadata: Metadata = {
  title: "Echo Guard | מצטרפים להגנה",
  description:
    "אקו גארד מזהה מצבים שחשוב שהורים יכירו, בלי לחשוף את השיחות של הילדים.",
  openGraph: {
    title: "Echo Guard | שומרים על הילדים בוואטסאפ",
    description:
      "מזהים מצבי סיכון ושיח פוגעני, ומעדכנים את ההורים כשצריך.",
    url: "https://gaddyh.dev/guard/join",
    siteName: "Echo Guard",
    type: "website",
    images: [
      {
        url: "/og-guard-v3.png",
        width: 1200,
        height: 630,
        alt: "Echo Guard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Echo Guard | שומרים על הילדים בוואטסאפ",
    description: "מזהים מצבי סיכון ושיח פוגעני, ומעדכנים את ההורים כשצריך.",
    images: ["/og-guard-v3.png"],
  },
};

export default function GuardJoinPage() {
  return (
    <main
      lang="he"
      dir="rtl"
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "2rem",
        background: "#f6f9f8",
        color: "#17342c",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: 480,
          padding: "2.5rem",
          borderRadius: 20,
          background: "#fff",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.06)",
          textAlign: "center",
        }}
      >
        <img
          src="/og-guard-v3.png"
          alt="Echo Guard"
          style={{ display: "block", width: "100%", borderRadius: 12, marginBottom: 24 }}
        />
        <h1 style={{ fontSize: "1.8rem", marginBottom: 12 }}>מצטרפים לאקו גארד</h1>
        <p style={{ lineHeight: 1.7, marginBottom: 28 }}>
          אקו גארד עוזר להורים להכיר מצבים חשובים בעולם הוואטסאפ של הילדים,
          בלי לתת גישה לשיחות שלהם.
        </p>
        <a
          href={whatsappUrl}
          style={{
            display: "inline-block",
            padding: "14px 24px",
            borderRadius: 12,
            background: "#16845f",
            color: "#fff",
            fontWeight: 700,
            textDecoration: "none",
          }}
        >
          מתחילים בוואטסאפ
        </a>
      </section>
    </main>
  );
}
