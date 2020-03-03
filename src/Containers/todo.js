import React from 'react';
import "./todo.scss";
import TodoList from '../Components/todoList.js';

class ToDo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: []
        }

        this.addTask = this.addTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }



    addTask(e) {
        if (this._inputElement.value !== "") {

            var newTask = {
                text: this._inputElement.value,
                // In order for React to easily keep track of the array, we need to establish a unique key for each item
                key: Date.now()
            };

            // we don't want to obliterate any existing tasks, so we pass in the previous state and replace everything with the former task array and appending the new task
            this.setState((prevState) => {
                return {
                    tasks: prevState.tasks.concat(newTask)
                };
            });



            // now that the task is added, we want to clear out the value of the input so a new one can be added
            this._inputElement.value = "";


        }

        // To prevent the form from being submitted and the page getting cleared
        e.preventDefault();
    }

    deleteTask(key) {
        var filteredItems = this.state.tasks.filter(function (item) {
            return (item.key !== key);
        });

        this.setState({
            tasks: filteredItems
        });
    }

    // React doesn't like when you try to access the dom and mess with it, so need to use refs. 
    // Using the ref, we are creating a prop and storing the input's value in this component's props.

    render() {
        return (
            <div className="todo-container">
                <div className="header">
                    <form onSubmit={this.addTask}>
                        <input placeholder="Enter task" type="text" ref={(a) => this._inputElement = a} />
                        <button type="submit">Add Task</button>
                    </form>
                </div>
                <TodoList tasks={this.state.tasks} deleteTask={this.deleteTask} />
            </div>
        );


    }

}

export default ToDo;