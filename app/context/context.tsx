'use client'
import { useState, createContext, ReactNode, Dispatch, SetStateAction, PropsWithChildren, useEffect } from "react";
import fetchTopStories from "../services/fetch/nytimes-top-stories";
import fetchAviationData from "../services/fetch/nytimes-aviation";
import fetchWire from "../services/fetch/nytimes-wire";

interface TopStoriesContextType {
  topStories: object[];
  setTopStories: Dispatch<SetStateAction<any[]>>;
}

export const TopStoriesContext = createContext<TopStoriesContextType>({
  topStories: [],
  setTopStories: () => { }
})

export function TopStoriesProvider({ children }: PropsWithChildren<{ children?: ReactNode | undefined }>) {
  const [topStories, setTopStories] = useState<Object[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTopStories()
      //transform data and remove unnessary two elements
      data.results.splice(0, 2)
      setTopStories(data.results)
    }

    fetchData()
  }, [])

  return (<TopStoriesContext.Provider value={{ topStories, setTopStories }}> {children} </TopStoriesContext.Provider>)

}

interface AviationContextType {
  aviationStories: object[];
  setAviationStories: Dispatch<SetStateAction<any[]>>;
}

export const AviationContext = createContext<AviationContextType>({
  aviationStories: [],
  setAviationStories: () => { }
})

export function AviationStoriesProvider({ children }: PropsWithChildren<{ children?: ReactNode | undefined }>) {
  const [aviationStories, setAviationStories] = useState<Object[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAviationData()
      const transformedData = data.response.docs
      setAviationStories(transformedData)
    }

    fetchData()
  }, [])

  return (<AviationContext.Provider value={{ aviationStories, setAviationStories }}>{children}</AviationContext.Provider>)
}


interface WireContextType {
  wireStories: object[];
  setWireStories: Dispatch<SetStateAction<any[]>>;
}

export const WireContext = createContext<WireContextType>({
  wireStories: [],
  setWireStories: () => { }
})

export function WireProvider({ children }: PropsWithChildren<{ children?: ReactNode | undefined }>) {
  const [wireStories, setWireStories] = useState<Object[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchWire()
      const transformedData = data.results
      setWireStories(transformedData)
    }

    fetchData()
  }, [])

  return (<WireContext.Provider value={{ wireStories, setWireStories }}>{children}</WireContext.Provider>)
}