import React, { Component} from "react";

class Todo extends Component {
    render() {
        return (
            <div>
                <h1>Todo</h1>
                <div className="todo">
                <div className="header">
                <form>
                    <input placeholder="Todo Item"></input>
                    <button type="submit">Add</button>
                </form>
                </div>
                </div>
            </div>
        );
    }
}

export default Todo;