import React from "react";
import { connect } from "react-redux";
import { addArticle } from "../actions/index";
import { ADD_ARTICLE } from "../constants/action-types";
function mapDispatchToProps(dispatch) {
    return {
      addArticle: article => dispatch(addArticle(article))
    };
  }

 
 class ConnectedForm extends React.Component{
     constructor(props){
         super(props);
         this.state = {
             title : ''
         }
     }
    handleChange = (e) => {
        this.setState({
            title : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { title } = this.state;
        this.props.addArticle({ title });
        this.setState({ title: "" });

    }
    render() {
       const {title} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
              <div>
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={this.handleChange}
                />
              </div>
              <button type="submit">SAVE</button>
            </form>
          );
    }
}
const Form = connect(null, mapDispatchToProps)(ConnectedForm);

 export default Form;