import React from "react";

class Form extends React.Component {
    render() {
        return (
         <form className="form" onSubmit={this.props.weatherMethod}>
             <input type="text" name="city" placeholder="City"/>
             <button>Search</button>
         </form>
        )
    }
}
export default Form;