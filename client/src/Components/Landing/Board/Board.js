import React, { Component } from 'react';
import _ from 'lodash';

import styles from './Board.module.scss';
import Card from './../../Card/Card';

class Board extends Component {
    displayCards() {
        return _.map(this.props.tasks, task => {
            return <Card key={task.key} todo={task}></Card>;
        });
    }

    render() {
        let cards = null;
        let columnHead = null;

        try {
            cards = this.displayCards();
        } catch (e) {
            console.log(e);
        }

        if (this.props.identifier === 'todo') {
            columnHead = (
                <div className={styles['board__title']}>
                    <i className="material-icons">list</i> TODO
                </div>
            );
        } else if (this.props.identifier === 'ongoing') {
            columnHead = (
                <div className={styles['board__title']}>
                    <i className="material-icons">data_usage</i> ONGOING
                </div>
            );
        } else if (this.props.identifier === 'done') {
            columnHead = (
                <div className={styles['board__title']}>
                    <i className="material-icons">check_circle</i> DONE
                </div>
            );
        }

        return (
            <div className={styles.board}>
                {columnHead}
                <div className={styles['board__content']}>{cards}</div>
            </div>
        );
    }
}

export default Board;
