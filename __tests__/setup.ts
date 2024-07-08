import "@testing-library/jest-dom/vitest";
import { server } from "./mocks/server";
import { beforeAll, afterEach, afterAll, vi } from "vitest";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

vi.mock('next/font/google', () => ({
  Fraunces: () => ({
    style: {
      fontFamily: 'mocked',
    },
  }),
  Italiana: () => ({
    style: {
      fontFamily: 'mocked',
    },
  }),
  Tangerine: () => ({
    style: {
      fontFamily: 'mocked',
    },
  }),
}))
