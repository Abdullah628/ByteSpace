/** Stands in for a network request: there is no backend, so forms just wait briefly. */
export function simulateRequest(ms = 600) {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
}
