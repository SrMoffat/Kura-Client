import React, { Component } from 'react';
import { Query } from 'react-apollo';
import Link from './Link';
import QUERIES from '../queries/query';

const { FEED_QUERY } = QUERIES;

class LinkList extends Component {
    render(){
        return (
            <Query query={ FEED_QUERY }>
                {({ loading, error, data }) => {

                    if (loading) return <div>Fetching</div>
                    if (error) return <div>Error</div>
                    
                    return (
                        <div>
                            {data.feed.links.map(link => <Link key={ link.id } link={ link }/> )}
                        </div>
                    )
                }}
            </Query>
        )

    }
}

export default LinkList;
