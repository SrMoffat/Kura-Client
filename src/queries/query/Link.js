import gql from 'graphql-tag';

const FEED_QUERY = gql`
{
  feed(first:10){
    links {
      id
      description
      url
    }
  }
}
`

export default {
  FEED_QUERY
}