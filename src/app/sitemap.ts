import { MetadataRoute } from 'next'
import { createClient } from 'next-sanity'

const client = createClient({
  projectId: 'ngv10dz3',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-05-03'
})

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://bio-remake.vercel.app'

  // Fetch all plants
  const plants = await client.fetch(`*[_type == "plant" && defined(varietyName)]{
    "slug": species + "-" + varietyName,
    _updatedAt
  }`)

  // Static routes
  const routes = ['', '/about', '/contact', '/garden-center', '/fuel'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Dynamic plant routes (if they exist in your app structure)
  const plantRoutes = plants.map((plant: any) => ({
    url: `${baseUrl}/plants/${encodeURIComponent(plant.slug.toLowerCase().replace(/\s+/g, '-'))}`,
    lastModified: new Date(plant._updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...routes, ...plantRoutes]
}
