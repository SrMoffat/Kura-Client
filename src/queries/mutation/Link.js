import gql from 'graphql-tag';

const POST_MUTATION = gql`
    mutation PostMutation($description: String!, $url: String!){
        post(
            description: $description
            url: $url
        ){
            id
            url
            description
        }
    }
`

export default {
    POST_MUTATION
}