import React, { useState } from 'react';

import SideNav from '../../SideNav';
import AppContent from '../../AppContent';
import Modal from '../../Modal';


const ClustersPage = (props) => {
    const { match: { path } } = props;
    const page = path.substring(1);

    const [openModal, setOpenModal] = useState(false);
    const [modalInput, setmodalInput] = useState({});
    const { clusterName } = modalInput;

    const onItemClick = item => {
        if (item === 'Add Cluster') {
            setOpenModal(true);
        }
    }

    const handleClose = () => {
        if(openModal){
            setOpenModal(false);
        }
    }

    const onChange = (e) => {
        const { target: { name, value } } = e;

        const newState = {...modalInput, [name] : value };
        setmodalInput(newState);
    }

    const input = {
        label: 'Cluster Name', 
        name: 'clusterName', 
        placeholder: '',
        onChange, 
        value: clusterName, 
        type: 'text',
        key: 'clusterName',
        errors: ''
    }

    return (
        <div className="grid-container">
            <SideNav {...props} onItemClick={onItemClick}/>
            <AppContent page={page} />
            <Modal open={openModal} handleClose={handleClose} input={input} clusterName={clusterName}/>
        </div>
    )

}

export default ClustersPage;