import { it, expect, describe } from 'vitest'

describe('fetch call to return data', () => {
  it('should', async () => {
    const res = await fetch(`https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=${process.env.API_KEY}`);
    const data = await res.json();
    expect(data).toHaveLength(1);
  })
})