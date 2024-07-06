'use client'
import { PropsWithChildren } from "react"
import { TopStoriesProvider, AviationStoriesProvider, WireProvider, SearchProvider } from "./context"

const ContextProviders = ({ children }: PropsWithChildren<{}>) => {
  return (
    <TopStoriesProvider>
      <AviationStoriesProvider>
        <WireProvider>
          <SearchProvider>
            {children}
          </SearchProvider>
        </WireProvider>
      </AviationStoriesProvider>
    </TopStoriesProvider>
  )
}

export default ContextProviders
