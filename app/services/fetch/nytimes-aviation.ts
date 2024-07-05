const fetchAviationData = async () => {
  const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=aviation&api-key=${process.env.API_KEY}`, { next: { revalidate: 3600 } })

  if (!res.ok) throw new Error('x to fetch news data')

  return res.json()
}

export default fetchAviationData