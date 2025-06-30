export default async function handler(req, res) {
  const id = req.headers['CF-Access-Client-Id: fc60d40c98172111509f2c371a20b988.access'];
  const secret = req.headers['3bd763913e1d88115a341fb19d0cfe673c55a76379de67b472ab3cf94aeef472'];
  if (!id || !secret) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  const q = req.query.q || '';
  const resp = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=5&q=${encodeURIComponent(q)}&key=${process.env.YOUTUBE_API_KEY}`);
  const json = await resp.json();
  res.status(200).json(json);
}
