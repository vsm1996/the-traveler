const fetchWire = async () => {
  const res = await fetch(`https://api.nytimes.com/svc/news/v3/content/all/travel.json?api-key=${process.env.API_KEY}`, { next: { revalidate: 3600 } })

  if (!res.ok) throw new Error('Failed to fetch live news data')

  const results = await res.json()
  return results
}

export default fetchWire