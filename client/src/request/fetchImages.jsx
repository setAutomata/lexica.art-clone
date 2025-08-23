const api_endpoint = import.meta.env.VITE_API_ENDPOINT;

export default async function fetchImages() {
  try {
    const response = await fetch(api_endpoint);
    if (!response.ok) throw new Error(`Http Error! Status: ${response.status}`);
    return response.json();
  } catch (error) {
    throw new Error(`${error}`);
  }
}
