import React, { Component } from 'react'
import { connect } from "react-redux";

const mapStateToProps =  state => {
    console.log("state", state)
    return {
        articles : state.articles
    }
}
const ConnectedList = ({ articles }) => (
    <ul>
      {articles.map(el => (
        <li key={el.id}>{el.title}</li>
      ))}
    </ul>
  );

  const List = connect(mapStateToProps)(ConnectedList);

  export default List;
