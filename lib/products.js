import axios from "axios";

const url = process.env.NEXT_PUBLIC_SWEET_DREAMS_API;

export async function getProducts(page) {
  let pagination = '';
  if (page != null) {
    pagination = `?page=${page}`;
  }

  try {
    const response = await axios.get(`${url}/product${pagination}`);
    return response.data.content;
  } catch (error) {
    return null;
  }
}

export async function getAllProductsIds() {
  const products = await getProducts(null);
  return products.map((product) => ({ params: { id: product._id } }));
}

export async function getProductById(id) {
  let response = await fetch(`${url}/product/${id}`);
  if (response.ok) {
    let json = await response.json();
    return json.content;
  } else {
    alert("HTTP-Error: " + response.status);
  }
}