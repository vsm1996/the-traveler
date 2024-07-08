import React from 'react'
import ThemeController from '../themeController'

const Top = () => {
  return (
    <div className="flex items-center justify-center gap-2 border border-b-secondary mb-4 border-t-0 border-l-0 border-r-0 lg:border-none lg:mb-0">
      <h1 className="text-4xl my-4 text-orange-200">The Traveler </h1>
      <ThemeController />
    </div>
  )
}

export default Top
