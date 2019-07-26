import gql from 'graphql-tag';

const CREATE_CLUSTER_MUTATION = gql`
    mutation CreateClusterMutation($clusterName: String!){
            createCluster(clusterName: $clusterName){
                id
                clusterName
        }
    }
`

export default {
    CREATE_CLUSTER_MUTATION
}