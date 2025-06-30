export default async function handler(req, res) {
  const id = req.headers['cf-access-client-id'];
  const secret = req.headers['cf-access-client-secret'];
  if (!id || !secret) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  const q = req.query.q || '';
  const resp = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=5&q=${encodeURIComponent(q)}&key=${process.env.YOUTUBE_API_KEY}`);
  const json = await resp.json();
  res.status(200).json(json);
}
