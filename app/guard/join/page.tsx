import type { Metadata } from "next";
import Script from "next/script";

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
    <main lang="he" dir="rtl" style={{ minHeight: "100vh", display: "grid", placeItems: "center", fontFamily: "Arial, sans-serif", textAlign: "center", padding: "2rem" }}>
      <Script id="guard-join-redirect" strategy="afterInteractive">
        {`window.location.replace(${JSON.stringify(whatsappUrl)});`}
      </Script>
      <p>
        מעבירים לוואטסאפ…{" "}
        <a href={whatsappUrl}>לחצו כאן אם המעבר לא מתבצע</a>
      </p>
    </main>
  );
}
