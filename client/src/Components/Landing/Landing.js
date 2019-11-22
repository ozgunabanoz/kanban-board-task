import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './Landing.module.scss';
import Board from './Board/Board';
import ModalButton from './ModalButton/ModalButton';
import * as actions from './../../store/actions/index';

class Landing extends Component {
    state = {
        showModal: false,
        submitForm: {
            title: '',
            description: '',
            due_date: ''
        }
    };

    sendTasks(identifier) {
        let tasksToSend = [];

        for (let i = 0; i < this.props.tasks.length; i++) {
            if (this.props.tasks[i].status === identifier) {
                tasksToSend.push(this.props.tasks[i]);
            }
        }

        return tasksToSend;
    }

    openModal() {
        this.setState({ showModal: true });
    }

    closeModal() {
        this.setState({ showModal: false });
    }

    onChangeHandler(event, input) {
        const updatedElement = {
            ...this.state.submitForm,
            [input]: event.target.value
        };

        this.setState({ submitForm: updatedElement });
    }

    onSubmitForm = event => {
        event.preventDefault();
        this.props.onSubmitTask({ ...this.state.submitForm, status: 'todo' });
        this.setState({
            showModal: false,
            submitForm: { title: '', description: '', due_date: '' }
        });
    };

    render() {
        return (
            <div className={styles.landing}>
                <div className={styles.row}>
                    <div className={styles['col-1-of-3']}>
                        <Board
                            tasks={
                                this.props.tasks ? this.sendTasks('todo') : null
                            }
                            identifier="todo"
                        ></Board>
                    </div>
                    <div className={styles['col-1-of-3']}>
                        <Board
                            tasks={
                                this.props.tasks
                                    ? this.sendTasks('ongoing')
                                    : null
                            }
                            identifier="ongoing"
                        ></Board>
                    </div>
                    <div className={styles['col-1-of-3']}>
                        <Board
                            tasks={
                                this.props.tasks ? this.sendTasks('done') : null
                            }
                            identifier="done"
                        ></Board>
                    </div>
                </div>
                <ModalButton onClick={() => this.openModal()}></ModalButton>
                {this.state.showModal ? (
                    <div className={styles.modal}>
                        <div className={styles['modal__popup']}>
                            <div className={styles.row}>
                                <div className={styles.headline}>
                                    <div className={styles['headline__text']}>
                                        Create a task
                                    </div>
                                    <div
                                        className={
                                            styles['headline__close-button']
                                        }
                                        onClick={() => this.closeModal()}
                                    >
                                        <i className="material-icons">clear</i>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.row}>
                                <form
                                    autoComplete="off"
                                    className={styles['submit__form']}
                                    onSubmit={this.onSubmitForm}
                                >
                                    <label htmlFor="title">Title: </label>
                                    <input
                                        id="title"
                                        placeholder="Task Title"
                                        onChange={event =>
                                            this.onChangeHandler(event, 'title')
                                        }
                                        required
                                    ></input>
                                    <label htmlFor="description">
                                        Description:{' '}
                                    </label>
                                    <textarea
                                        id="description"
                                        placeholder="Describe the task"
                                        onChange={event =>
                                            this.onChangeHandler(
                                                event,
                                                'description'
                                            )
                                        }
                                        required
                                    ></textarea>
                                    <label htmlFor="due-date">Due Date: </label>
                                    <input
                                        id="due-date"
                                        type="date"
                                        onChange={event =>
                                            this.onChangeHandler(
                                                event,
                                                'due_date'
                                            )
                                        }
                                        required
                                    ></input>
                                    <div className={styles['form__buttons']}>
                                        <button
                                            className={
                                                styles['form__buttons__close']
                                            }
                                            type="button"
                                            onClick={() => this.closeModal()}
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            className={
                                                styles['form__buttons__submit']
                                            }
                                            type="submit"
                                        >
                                            OK
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        tasks: state.taskStore.tasks
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSubmitTask: todo => dispatch(actions.postTask(todo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
