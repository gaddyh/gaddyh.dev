import { redirect } from "next/navigation";

// Branded share link for WhatsApp invitations. Redirect on the server:
// no intermediate page and no client-side JavaScript navigation.
// Browsers and iOS can still require confirmation before opening WhatsApp.
const whatsappUrl =
  "https://wa.me/972559937256?text=" +
  encodeURIComponent("היי, אני רוצה להצטרף לאקו גארד");

export default function GuardJoinPage() {
  redirect(whatsappUrl);
}
