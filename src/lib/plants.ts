"use server";

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

export async function getPaginatedPlants(
  category: string = "All",
  page: number = 1,
  limit: number = 12,
  search: string = ""
): Promise<Plant[]> {
  const start = (page - 1) * limit;
  const end = start + limit;

  let filters = [`_type == "plant"`];
  
  if (category !== "All") {
    filters.push(`category->title == "${category}"`);
  }
  
  if (search) {
    const s = search.toLowerCase();
    filters.push(`(species match "*${s}*" || varietyName match "*${s}*" || latinName match "*${s}*")`);
  }

  const filterString = filters.join(" && ");

  try {
    const query = `*[${filterString}] | order(species asc, varietyName asc) [${start}...${end}] {
      _id,
      varietyName,
      species,
      latinName,
      characteristics,
      price,
      "imageUrl": image.asset->url,
      "category": category->title
    }`;
    console.log("Fetching plants with query:", query);
    const results = await client.fetch(query);
    console.log(`Fetched ${results.length} plants`);
    return results;
  } catch (error) {
    console.error("Sanity fetch error in getPaginatedPlants:", error);
    throw error;
  }
}

export async function getCategories(): Promise<Category[]> {
  try {
    const query = `*[_type == "plantCategory"]{ _id, title, "slug": slug.current }`;
    console.log("Fetching categories with query:", query);
    const results = await client.fetch(query);
    console.log(`Fetched ${results.length} categories`);
    return results;
  } catch (error) {
    console.error("Sanity fetch error in getCategories:", error);
    throw error;
  }
}
