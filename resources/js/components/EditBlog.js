
    import axios from 'axios'
    import React, { Component } from 'react'
    import { Link } from 'react-router-dom'
   import { history } from 'react-router';

    class EditList extends Component {
      constructor (props) {
        super(props)
        this.state = {title:'',body:'',
        };
       this.updateBlog=this.updateBlog.bind(this);
       this.handle1=this.handle1.bind(this);
       this.handle2=this.handle2.bind(this);

      }
      componentDidMount () {
        const uri='http://127.0.0.1:8000/api/Blog/'+this.props.match.params.id ;
        axios.get(uri).then(response => {
          console.log(response);
          this.setState({
           title: response.data.title,
           body:response.data.body
           })
        })
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
      updateBlog(e){
        e.preventDefault();
        
        const Blog={
          title:this.state.title,
          body:this.state.body,
        }
        axios.put('/api/Blog/'+this.props.match.params.id,Blog).
        then((response)=>{
          this.props.history.push('/home');
        })
      }     

      

      render () {
        return (
          <div className='py-4'>
            <h1>Add Blog</h1>
          <div className="">
          <form onSubmit={this.updateBlog} method="Post">
          <div className="text-center flex flex-col">
            <label className="text-xl font-bold">Title</label>
                <input type="text"
                  className="border border-blue-500 h-8 rounded-lg"
                  value={this.state.title}
                  onChange={this.handle1} />            
            <label className="text-xl font-bold">Body</label>
            <textarea   onChange={this.handle2}  className="border border-blue-500 h-8 rounded-lg" value={this.state.body}/>
            <button className="bg-blue-500 px-6 py-2 border rounded-lg my-8">Update</button>
              </div>
          </form>

          </div>
            
          </div>
        )
      }
    }

export default EditList;
