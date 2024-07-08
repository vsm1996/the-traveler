import { setupServer } from 'msw/node'
import { handlers } from './handlers'
import { afterAll, afterEach, beforeAll } from 'vitest';


export const server = setupServer(...handlers)

beforeAll(async () => {
  server.listen()
});
afterEach(() => server.resetHandlers());
afterAll(() => server.close());