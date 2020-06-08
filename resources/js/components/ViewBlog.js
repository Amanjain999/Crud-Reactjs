    // resources/assets/js/components/ProjectsList.js

    import axios from 'axios'
    import React, { Component } from 'react'
    import { Link } from 'react-router-dom'
   import { history } from 'react-router';

    class BlogList extends Component {
      constructor (props) {
        super(props)
        this.state = {
          Blogs: []
        }
        
      }
      
      componentDidMount () {
        const uri='http://127.0.0.1:8000/api/Blog/'+this.props.match.params.id ;

        axios.get(uri).then(response => {
          this.setState({
            title: response.data.title,
            body:response.data.body
          })
        })
      }

      render () {
       
        return (
          <div className="grid grid-cols-6 ">
          <div className=' col-start-1 col-end-7 bg-red-800 mx-auto text-center  py-12 border  rounded-lg'>
           <span  className=" bg-white text-xl font-bold uppercase">{this.state.title}</span>
           <div className=" bg-gray-500">
           {this.state.body}
           </div>
          </div>
          </div>
        )
      }
    }

export default BlogList;
