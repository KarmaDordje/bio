import { Metadata } from "next"
import { HomeClient } from "./HomeClient"

export const metadata: Metadata = {
  title: "Szkółka Krzewów Ozdobnych Bilscy - Iglaki, Liściaste, Biopaliwa",
  description: "Ponad 350 odmian roślin. Profesjonalna szkółka z tradycją od 1978 roku. Oferujemy iglaki, krzewy liściaste, pnącza oraz biopaliwa (pellet, brykiet).",
  openGraph: {
    title: "Szkółka Krzewów Ozdobnych Bilscy",
    description: "Tradycja i jakość od 1978 roku. Odkryj bogatą ofertę roślin do Twojego ogrodu.",
    images: [{ url: "/images/front_bg_pines.png" }]
  }
}

export default function Home() {
  return <HomeClient />
}
