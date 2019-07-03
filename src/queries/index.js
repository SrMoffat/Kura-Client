import gql from 'graphql';

const SIGNUP_QUERY = gql`
    mutation {
    signUp(
        name:"4fr0c0d3"
        email:"one@email.com"
        password:"onep4sS!"
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