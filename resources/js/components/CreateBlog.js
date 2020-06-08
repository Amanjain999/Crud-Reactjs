import React ,{Component}from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import { history } from 'react-router';

class CreateBlog extends Component {
  constructor(props){
    super(props);
    this.state = {title: '', body: ''};


     this.handle1 = this.handle1.bind(this);
    this.handle2 = this.handle2.bind(this);
    this.submitBlog = this.submitBlog.bind(this);


  }
  handle1(e){
  	this.setState({
  		title:e.target.value
  	})
  }
   handle2(e){
  	this.setState({
  		body:e.target.value
  	})
  }
  // handleChange1(e){
  //   this.setState({
  //     productTitle: e.target.value
  //   })
  // }
  // handleChange2(e){
  //   this.setState({
  //     productBody: e.target.value
  //   })
  // }
  submitBlog(e){
  	e.preventDefault();
  	const blog={
  		title:this.state.title,
  		body:this.state.body
  	}
  	axios.post('api/Blog',blog).
  	then((response)=>{
          this.props.history.push('/home');
  	}).catch(err=>{
      console.log(err)
    })

  }


    render() {
      return (
      <div className=" container-sm mx-auto text-center px-48 py-12 border  rounded-lg ">
        	<h1>Add Blog</h1>
        	<div className="">
        	<form onSubmit={this.submitBlog} method="Post">
        	<div className="text-center flex flex-col">
        		<label className="text-xl font-bold">Title</label>
        		<input type="text" name="title" onChange={this.handle1} className="border border-blue-500 h-8 rounded-lg" />
        		
            <label className="text-xl font-bold">Body</label>
        		<textarea  name="body" onChange={this.handle2}  className="border border-blue-500 h-8 rounded-lg"/>
        		<button className="bg-blue-500 px-6 py-2 border rounded-lg my-8">Add Blog</button>
        			</div>
        	</form>

        	</div>
        	  </div>
      )
    }
}
export default CreateBlog;
