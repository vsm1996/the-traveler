'use client'
import { PropsWithChildren } from "react"
import { TopStoriesProvider, AviationStoriesProvider, WireProvider } from "./context"

const ContextProviders = ({ children }: PropsWithChildren<{}>) => {
  return (
    <TopStoriesProvider>
      <AviationStoriesProvider>
        <WireProvider>
          {children}
        </WireProvider>
      </AviationStoriesProvider>
    </TopStoriesProvider>
  )
}

export default ContextProviders
