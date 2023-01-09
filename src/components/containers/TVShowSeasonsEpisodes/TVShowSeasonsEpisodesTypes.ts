import { Identifier } from "@babel/types"

export type TVShowSeasonEpisode = {
    number : number
    season : number
}

export type TVShowSeasonEpisodeProps = {
    seasonNumber : number
    id : Identifier
}