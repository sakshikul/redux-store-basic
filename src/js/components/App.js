import React from "react";
import List from "./List";
import Form from "./Form";
import Post from "./Post";

class App extends React.Component{
    render(){
        return(
            <div>
                <h1>Lists</h1>
               <List/>
               <div>
                   <h2>Add a new article</h2>
                   <Form />
               </div>
               <div>
                    <h2>API posts</h2>
                    <Post />
                </div>
            </div>
            
        )
    }
}

export default App;