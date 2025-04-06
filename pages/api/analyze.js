export default async function handler(req, res) {
  const { text } = req.body;
  // Fake response - connect to OpenAI later
  res.status(200).json({ result: `AI thinks your input was: "${text}"` });
}
