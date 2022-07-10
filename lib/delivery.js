import axios from 'axios';

const url = process.env.NEXT_PUBLIC_SWEET_DREAMS_API;

export async function getDeliveryInfo(zipCode, amount) {
  try {
    const response = await axios.get(
      `${url}/service/deliveryInfo?cep=${zipCode}&amount=${amount}`
    );
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
