import React from 'react';

import styles from './ModalButton.module.scss';

const modalButton = props => {
    return (
        <div
            className={styles['modal__button']}
            onClick={() => props.onClick()}
        >
            <i className="material-icons">add_circle</i>
        </div>
    );
};

export default modalButton;
