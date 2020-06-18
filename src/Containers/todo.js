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

    componentDidMount() {
        // Since we can only store strings in local storage, need to parse the JSON string back into an object and save it in state
        var tasks = JSON.parse(localStorage.getItem("tasks"));
        this.setState({ tasks: tasks })
    }

    componentDidUpdate() {
        // We want the tasks to persist, so we're saving them all in localstorage when the state gets updated
        // Local storage can only store strings, so we need to turn the state.tasks object into a string
        localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
    }

    addTask(e) {
        // Make sure user entered a value into input
        if (this.enteredTask.value !== "") {

            var newTask = {
                text: this.enteredTask.value,
                // In order for React to easily keep track of the array, we need to establish a unique key for each item
                key: Date.now(),
                tags: this.enteredTags.value,
                done: false
            };

            // we don't want to obliterate any existing tasks, so we pass in the previous state and replace everything with the former task array and append the new task
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
        // Filtering out the task to be deleted
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

                        <input placeholder="Enter S.M.A.R.T. task" type="text" ref={(a) => this.enteredTask = a} />

                        <em>(Specific, Measurable, Attainable, Realistic, Timely)</em>
                        <input className="tags" placeholder="Add Tag or Tags with &quot;,&quot;" type="text" ref={(b) => this.enteredTags = b} />
                        <button type="submit">+</button>
                    </form>
                </div>
                <TodoList tasks={this.state.tasks} deleteTask={this.deleteTask} />
            </div>
        );
    }
}

export default ToDo;