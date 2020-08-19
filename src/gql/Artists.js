import { gql } from '@apollo/client';

export const GET_ARTISTS = gql`
query queryArtists($byname: String) {
  
    queryArtists(byName: $byname) {
      name
      id
      image
    }
  }

`