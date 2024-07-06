const fetchSearch = async (item: string) => {
  const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${item}&api-key=${process.env.API_KEY}`)

  if (!res.ok) throw new Error('Failed to fetch search data')

  const results = await res.json()
  return results
}

export default fetchSearch