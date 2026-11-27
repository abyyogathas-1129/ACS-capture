// One service card, as the server sends it (same shape as catalog.types.ts in the server)
export type StudioService = {
  id: number
  slug: string
  title: string
  subtitle: string
  description: string
  imageUrl: string
  pagePath: string
}
