export default async function handler(req, res) {
  const url = "https://91appt.com/api/game/xy28/xy28History";

  try {
    // Node.js 18+ में fetch पहले से built-in है
    const response = await fetch(url);
    const data = await response.json();

    // CORS allow
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    res.status(200).json(data);

  } catch (error) {
    console.error("API Error:", error);
    res.status(500).json({
      error: "Unable to fetch data",
      details: error.message
    });
  }
}
