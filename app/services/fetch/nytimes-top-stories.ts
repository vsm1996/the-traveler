const fetchTopStories = async () => {
  const res = await fetch(`https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=${process.env.API_KEY}`, { next: { revalidate: 3600 } })

  if (!res.ok) throw new Error('Failed to fetch top stories data')

  const results = await res.json()
  return results
}

export default fetchTopStories