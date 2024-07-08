'use client'
import { useState, createContext, ReactNode, Dispatch, SetStateAction, PropsWithChildren, useEffect } from "react";
import fetchTopStories from "../services/fetch/nytimes-top-stories";
import fetchAviationData from "../services/fetch/nytimes-aviation";
import fetchWire from "../services/fetch/nytimes-wire";
import { TopStoryProp, WireStoryProp } from "../types/propTypes";
import fetchSearch from "../services/fetch/nytimes-search";

interface TopStoriesContextType {
  topStories: TopStoryProp[];
}

export const TopStoriesContext = createContext<TopStoriesContextType>({
  topStories: [],
})

export function TopStoriesProvider({ children }: PropsWithChildren<{ children?: ReactNode | undefined }>) {
  const [topStories, setTopStories] = useState<TopStoryProp[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTopStories()

      //transform data and remove unnessary element
      data.results.shift()
      setTopStories(data.results)
    }

    fetchData()
  }, [])

  return (<TopStoriesContext.Provider value={{ topStories }}> {children} </TopStoriesContext.Provider>)

}

interface AviationContextType {
  aviationNews: any[];
}

export const AviationContext = createContext<AviationContextType>({
  aviationNews: [],
})

export function AviationNewsProvider({ children }: PropsWithChildren<{ children?: ReactNode | undefined }>) {
  const [aviationNews, setAviationNews] = useState<any[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAviationData()
      const transformedData = data.response.docs
      setAviationNews(transformedData)
    }

    fetchData()
  }, [])

  return (<AviationContext.Provider value={{ aviationNews }}>{children}</AviationContext.Provider>)
}


interface WireContextType {
  wireStories: WireStoryProp[];
}

export const WireContext = createContext<WireContextType>({
  wireStories: []
})

export function WireProvider({ children }: PropsWithChildren<{ children?: ReactNode | undefined }>) {
  const [wireStories, setWireStories] = useState<WireStoryProp[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchWire()
      const transformedData = data.results
      setWireStories(transformedData)
    }

    fetchData()
  }, [])

  return (<WireContext.Provider value={{ wireStories }}>{children}</WireContext.Provider>)
}

interface Search {
  searchStories: any[];
  fetchSearchData: Function;
}

export const SearchContext = createContext<Search>({
  searchStories: [],
  fetchSearchData: (a: string) => { }
})

export function SearchProvider({ children }: PropsWithChildren<{ children?: ReactNode | undefined }>) {
  const [searchStories, setSearchStories] = useState<Object[]>([])

  const fetchSearchData = async (searchTerm: string) => {
    const data = await fetchSearch(searchTerm)
    const transformedData = data.response.docs
    setSearchStories(transformedData)
  }

  return (<SearchContext.Provider value={{ searchStories, fetchSearchData }}>{children}</SearchContext.Provider>)
}