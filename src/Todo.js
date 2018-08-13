import React, { Component} from "react";

class Todo extends Component {
    constructor (props) {
        super(props);

        this.state = {
            item: []
        };

        this.addTodo = this.addTodo.bind(this);
    }

    addTodo(e) {
        if (this._inputElement.value !== "") {
            var newItem = {
              text: this._inputElement.value,
              key: Date.now()
            };
         
            this.setState((prevState) => {
              return { 
                items: prevState.items.concat(newItem) 
              };
            });
           
            this._inputElement.value = "";
          }
           
          console.log(this.state.items);
             
          e.preventDefault();

    }


    render() {
        return (
            <div>
                <h1>Todo</h1>
                <div className="todo">
                <div className="header">
                <form onSubmit={this.addTodo}>
                    <input  ref={ (a)=> this._inputElement = a}
                    placeholder="Todo Item"></input>
                    <button type="submit">Add</button>
                </form>
                </div>
                </div>
            </div>
        );
    }
}

export default Todo;