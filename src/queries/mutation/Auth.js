import gql from 'graphql-tag';

const SIGNUP_MUTATION = gql`
    mutation SignupMutation($name: String!, $email: String!, $password: String!){
        signUp(
            name: $name
            email: $email
            password: $password
        ){
            token
            user {
            id
            user_id
            name
            email
            }      
        }
    }
`

const LOGIN_MUTATION = gql`
    mutation LoginMutation($email: String!, $password: String!){
        login(
            email: $email
            password: $password
        ){
            token
            user {
                id
                user_id
                email
            }
        }   
    }   
`

export default {
    SIGNUP_MUTATION,
    LOGIN_MUTATION
}