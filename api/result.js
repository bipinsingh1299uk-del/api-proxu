export default async function handler(req, res) {
  const url = "https://91appt.com/api/game/xy28/xy28History";

  try {
    const response = await fetch(url); // node-fetch की जरूरत नहीं
    const data = await response.json();

    // CORS allow
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to fetch data" });
  }
}
