const { updateGitHub } = require("./github");

module.exports = async (req, res) => {
  if (req.method !== "POST") return res.status(405).end();

  const data = req.body;

  try {
    await updateGitHub(data);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "failed" });
  }
};
