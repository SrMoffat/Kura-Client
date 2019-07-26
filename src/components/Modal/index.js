import React from 'react';
import { Mutation } from 'react-apollo';

import clustermodal from '../../images/modal-cluster.svg';
import topshape from '../../images/TopShape.svg';
import bottomshape from '../../images/BottomShape.svg';
import closebtn from '../../images/close-btn.svg';

import TextInput from '../TextInput';

import CLUSTER_MUTATIONS from '../../queries/mutation/Cluster';

const { CREATE_CLUSTER_MUTATION } = CLUSTER_MUTATIONS;


const Modal = (props) => {
    const { open, handleClose, input, clusterName } = props;

    const confirm = (data) => {
        console.log(data);
    }

    document.body.style.overflow = open ? 'hidden' : '';

    return (
        <div className={`modal-house ${open ? 'open' : 'close'}`} id="modal">
            <div className="modal">
                <div className="modal-bottom-shape">
                    <img
                        src={bottomshape}
                        alt='bottomshape'
                    >
                    </img>
                </div>
                <div className="modal-container">
                    <div className="modal-header">
                        <span className="modal-close-btn" id="modal-close-btn" onClick={handleClose}>
                            <img className="modal-close-icon" src={closebtn} alt="close-btn"></img>
                        </span>
                        <span className="modal-title">Add Cluster</span>
                        <div className="modal-icon">
                            <img
                                src={clustermodal}
                                alt={clustermodal}
                            >
                            </img>
                        </div>
                    </div>
                    <div className="modal-body">
                        <form className="modal-content">
                            <TextInput {...input}/>
                            <Mutation
                                mutation={CREATE_CLUSTER_MUTATION}
                                variables={{clusterName}}
                                onCompleted={data => confirm(data)}
                            >
                                {
                                    mutation => (
                                    <button type="submit" className="modal-button" onClick={mutation}>
                                        Submit
                                    </button>
                                    )
                                }
                            </Mutation>
                        </form>
                    </div>
                </div>
                <div className="modal-top-shape">
                        <img
                            src={topshape}
                            alt='topshape'
                        >
                        </img>
                </div>

            </div>
        </div>
    )
}

export default Modal;