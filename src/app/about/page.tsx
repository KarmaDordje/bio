import { Metadata } from "next"
import { client } from "@/sanity/lib/client"
import { AboutClient } from "./AboutClient"

async function getAboutData() {
  return await client.fetch(`*[_type == "about"][0]{
    title,
    seo {
      title,
      description,
      image {
        asset->{
          url
        }
      }
    }
  }`)
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getAboutData()
  
  if (!data) {
    return {
      title: "O nas",
      description: "Poznaj historię Szkółki Krzewów Ozdobnych inż. Grzegorza Bilskiego."
    }
  }

  return {
    title: data.seo?.title || data.title || "O nas",
    description: data.seo?.description || "Poznaj historię Szkółki Krzewów Ozdobnych inż. Grzegorza Bilskiego.",
    openGraph: data.seo?.image ? {
      images: [{ url: data.seo.image.asset.url }]
    } : {
      images: [{ url: "/images/front.png" }]
    }
  }
}

export default function AboutPage() {
  return <AboutClient />
}
