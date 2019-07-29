import gql from 'graphql-tag';

const SIGNUP_MUTATION = gql`
    mutation SignupMutation($name: String!, $email: String!, $password: String!){
        signUp(
            name: $name
            email: $email
            password: $password
        ){
            payload {
                message
                token
                user {
                        user_id
                        email
                        name
                    }
                }
            error {
                field
                message
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
            payload {
                message
                token
                user {
                    user_id
                    email
                    name
                }
        }
            error {
            field
            message
            }
        }   
    }   
`

export default {
    SIGNUP_MUTATION,
    LOGIN_MUTATION
}