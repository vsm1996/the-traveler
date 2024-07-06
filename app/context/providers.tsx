'use client'
import { PropsWithChildren } from "react"
import { TopStoriesProvider, AviationNewsProvider, WireProvider, SearchProvider } from "./context"

const ContextProviders = ({ children }: PropsWithChildren<{}>) => {
  return (
    <TopStoriesProvider>
      <AviationNewsProvider>
        <WireProvider>
          <SearchProvider>
            {children}
          </SearchProvider>
        </WireProvider>
      </AviationNewsProvider>
    </TopStoriesProvider>
  )
}

export default ContextProviders
