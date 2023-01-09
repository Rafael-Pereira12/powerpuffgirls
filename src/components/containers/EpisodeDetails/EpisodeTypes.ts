export type EpisodeDetail = {
  airdate: string
  image: { medium: string }
  name: string
  number: number
  runtime: number
  season: number
  summary: string
  type: string
}

export type EpisodeDetailProps = {
  number: number
  season: number

}
