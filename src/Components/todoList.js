import React from 'react';

class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.createTasks = this.createTasks.bind(this);

    }

    createTasks(item) {
        return <li key={item.key}>
            <span className="task-item">{item.text}</span>
            <span className="remove" onClick={() => this.deleteTask(item.key)}><i className="fa fa-trash"></i></span>
            <div className="tags"></div>
        </li >
    }

    deleteTask(key) {
        this.props.deleteTask(key);
    }



    render() {

        var todoTasks = this.props.tasks === null ? [] : this.props.tasks;
        var listItems = todoTasks.map(this.createTasks);

        return (
            <ul className="task-list">

                {listItems}

            </ul>
        )
    }
}


export default TodoList;