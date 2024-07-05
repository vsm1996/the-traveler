const fetchWire = async () => {
  const res = await fetch(`https://api.nytimes.com/svc/news/v3/content/all/travel.json?api-key=${process.env.API_KEY}`, { next: { revalidate: 3600 } })

  if (!res.ok) throw new Error('Failed to fetch news data')

  return res.json()
}

export default fetchWire