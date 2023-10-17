const baseUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY

const authenticationHeader = {
  Authorization: `Bearer ${apiKey}`,
};

const get = (path: string) =>
  fetch(`${baseUrl}${path}`, { headers: authenticationHeader })
    .then((res) => res.json())
    .then((res) => res.records.map((r: { fields: unknown[] }) => r.fields));

export const getTrips = async () => await get("/Trips");
