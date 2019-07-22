import React from 'react';

import clustermodal from '../../images/modal-cluster.svg';
import topshape from '../../images/TopShape.svg';
import bottomshape from '../../images/BottomShape.svg';

import TextInput from '../TextInput';

const input = {
    label: 'Cluster Name', 
    name: 'name', 
    placeholder: '',
    onChange: () => {}, 
    value: '', 
    type: 'text',
    key: 'name',
    errors: ''
}

const Modal = () => {
    return (
        <div className="modal-house">
            <div className="modal">
                <div className="modal-bottom-shape">
                    <img
                        src={bottomshape}
                    >
                    </img>
                </div>
                <div className="modal-container">
                    <div className="modal-header">
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
                            <button type="submit" className="modal-button">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
                <div className="modal-top-shape">
                        <img
                            src={topshape}
                        >
                        </img>
                </div>

            </div>
        </div>
    )
}

export default Modal;