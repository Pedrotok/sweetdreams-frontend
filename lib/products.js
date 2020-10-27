import axios from "axios";

const url = process.env.NEXT_PUBLIC_SWEET_DREAMS_API;

export async function getProducts(page) {
  let pagination = '';
  if (page != null) {
    pagination = `?page=${page}`;
  }

  const response = await fetch(`${url}/product${pagination}`);
  if (response.ok) {
    const json = await response.json();
    return json.content;
  } else {
    console.log("HTTP-Error: " + response.status);
    return [];
  }
}

export async function getAllProductsIds() {
  const products = await getProducts(null);
  return products.map((product) => ({ params: { id: product._id } }));
}

export async function getProductById(id) {
  const response = await fetch(`${url}/product/${id}`);
  if (response.ok) {
    const json = await response.json();
    return json.content;
  } else {
    console.log("HTTP-Error: " + response.status);
    return null;
  }
}