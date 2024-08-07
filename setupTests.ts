import '@testing-library/jest-dom';

import { beforeAll, vi } from "vitest";

beforeAll(() => {
  vi.mock("next/navigation", () => require("next-router-mock"));

vi.mock('next/navigation', async (importOriginal) => {
  const actual = await importOriginal<typeof import('next/navigation')>();
  const { useRouter } = await vi.importActual<typeof import('next-router-mock')>('next-router-mock');
  const useParams = vi.fn().mockImplementation(() => {
    return {
      search: 'search',
      page: ['1']
    }
  });
  return {
    ...actual,
    useRouter: vi.fn().mockImplementation(useRouter),
    useParams,
  };
});

})
