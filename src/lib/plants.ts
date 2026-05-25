import { client } from "@/sanity/lib/client";

export type Category = {
  _id: string;
  title: string;
  slug: string;
};

export type Plant = {
  _id: string;
  varietyName: string;
  species: string;
  latinName: string;
  characteristics: string;
  price: number;
  imageUrl: string | null;
  category: string | null;
};

export async function getPlants(): Promise<Plant[]> {
  return await client.fetch(`
    *[_type == "plant"]{
      _id,
      varietyName,
      species,
      latinName,
      characteristics,
      price,
      "imageUrl": image.asset->url,
      "category": category->title
    }
  `);
}

export async function getCategories(): Promise<Category[]> {
  return await client.fetch(`*[_type == "plantCategory"]{ _id, title, "slug": slug.current }`);
}
