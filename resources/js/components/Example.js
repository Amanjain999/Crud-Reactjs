import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter ,Route,Link,Switch} from 'react-router-dom';
import Header from './Header.js';
import BlogList from './BlogList.js';
import CreateBlog from './CreateBlog.js';
import EditBlog from './EditBlog.js';
import ViewBlog from './ViewBlog.js';



class Example extends Component {
	render(){
    return (
        <BrowserRouter>
        <div className="container">
           <Header />
           
           <Switch>
            <Route exact path="/home" component={BlogList} />
            <Route  path="/create" component={CreateBlog} />
            <Route  path="/edit/:id" component={EditBlog} />
             <Route  path="/show/:id" component={ViewBlog} />


           </Switch>
        </div>
        </BrowserRouter>
    );
}
}
export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
