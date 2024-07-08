import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from '../../app/page'
import ContextProviders from '@/app/context/providers'

describe('Homepage', () => {
  it('should render heading', () => {
    render(
      <Home />
    )
    expect(screen.getByRole('heading', { level: 1, name: 'The Traveler' })).toBeDefined()
  })
})
