import { Metadata } from "next"
import { ContactClient } from "./ContactClient"

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Skontaktuj się ze Szkółką Krzewów Ozdobnych Bilscy w Bydgoszczy lub Białych Błotach. Zapraszamy do naszych centrów ogrodniczych.",
  openGraph: {
    title: "Kontakt - Szkółka Krzewów Ozdobnych Bilscy",
    description: "Adresy, numery telefonów i godziny otwarcia naszych punktów sprzedaży w Bydgoszczy i Białych Błotach.",
  }
}

export default function ContactPage() {
  return <ContactClient />
}
