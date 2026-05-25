import { client } from "@/sanity/lib/client";

export type Plant = {
  _id: string;
  varietyName: string;
  species: string;
  latinName: string;
  characteristics: string;
  price: number;
  imageUrl: string;
  category: string;
};

export async function getPlants() {
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

export async function getCategories() {
  return await client.fetch(`*[_type == "plantCategory"]{ _id, title, "slug": slug.current }`);
}
