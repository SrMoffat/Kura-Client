import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import MUTATIONS from '../queries/mutation';


const { POST_MUTATION } = MUTATIONS;

class CreateLink extends Component {
    state = {
        url: '',
        description: ''
    }

    render(){

        const { url, description } = this.state;

        return (
            <div>
                <div className="">
                    <input
                        className=""
                        value={description}
                        onChange={e => this.setState({ description: e.target.value })}
                        type="text"
                        placeholder="A description for the link"
                    />
                    <input
                        className=""
                        value={url}
                        onChange={e => this.setState({ url: e.target.value })}
                        type="text"
                        placeholder="The URL for the link"
                    />
                </div>
                <Mutation
                    mutation={POST_MUTATION}
                    variables={{ description, url }}
                    onCompleted={() => this.props.history.push('/')}
                    >
                { postMutation => (<button onClick={postMutation}>Add Link</button>) }
                </Mutation>
            </div>
        )
    }
}

export default CreateLink;

