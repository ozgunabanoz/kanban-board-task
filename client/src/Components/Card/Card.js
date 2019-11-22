import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './Card.module.scss';
import * as actions from './../../store/actions/index';

class Card extends Component {
    makeOngoing = () => {
        let todo = { ...this.props.todo, status: 'ongoing' };

        this.props.updateTask(todo);
    };

    makeDone = () => {
        let currDate = new Date();
        let dd = String(currDate.getDate()).padStart(2, '0');
        let mm = String(currDate.getMonth() + 1).padStart(2, '0');
        let yyyy = currDate.getFullYear();
        currDate = yyyy + '-' + mm + '-' + dd;

        let todo = {
            ...this.props.todo,
            status: 'done',
            finished_at: currDate
        };

        this.props.updateTask(todo);
    };

    render() {
        let isDone = false;
        let bottomSec = null;

        if (this.props.todo.status === 'todo') {
            bottomSec = (
                <div className={styles.row}>
                    <div className={styles['bottom-section']}>
                        <i
                            className="material-icons"
                            onClick={this.makeOngoing}
                        >
                            data_usage
                        </i>
                        <i className="material-icons" onClick={this.makeDone}>
                            check_circle
                        </i>
                    </div>
                </div>
            );
        } else if (this.props.todo.status === 'ongoing') {
            bottomSec = (
                <div className={styles.row}>
                    <div className={styles['bottom-section']}>
                        <i className="material-icons" onClick={this.makeDone}>
                            check_circle
                        </i>
                    </div>
                </div>
            );
        } else if (this.props.todo.status === 'done') {
            isDone = true;
        }

        return (
            <div
                className={styles.card}
                style={isDone ? { paddingTop: 0, paddingRight: 0 } : null}
            >
                {isDone ? (
                    <div className={styles.row}>
                        <div className={styles['card__complete-date']}>
                            Completed on:{' '}
                            {this.props.todo['finished_at']
                                .split('-')
                                .reverse()
                                .join('/')}
                        </div>
                    </div>
                ) : null}
                <div className={styles['card__title']}>
                    <div className={styles.row}>{this.props.todo.title}</div>
                </div>
                <div className={styles.row}>
                    <div className={styles['card__description']}>
                        {this.props.todo.description}
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles['card__due-date']}>
                        Due date:{' '}
                        {this.props.todo['due_date']
                            .split('-')
                            .reverse()
                            .join('/')}
                    </div>
                </div>
                {bottomSec}
            </div>
        );
    }
}

const mapDispatchtoProps = dispatch => {
    return {
        updateTask: todo => {
            dispatch(actions.updateTask(todo));
        }
    };
};

export default connect(null, mapDispatchtoProps)(Card);
