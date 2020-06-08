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
        this.Delete=this.Delete.bind(this);
      }
      Delete(id){
         axios.delete('/api/Blog/'+id).
        then((response)=>{
          this.props.history.push('/home');
        })
        
              }
      componentDidMount () {
        axios.get('/api/Blog').then(response => {
          this.setState({
            Blogs: response.data
          })
        })
      }

      render () {
        const { Blogs } = this.state
        return (
          <div className='py-4 '>
            <table className="w-full table-auto border ">
              <thead className="">
                <tr className="">
                <th>Title</th>
                <th>Body</th>
                <th>Slug</th>
                <th>Edit</th>
                <th>View</th>
                <th>Delete</th>
                </tr>
              </thead>
              <tbody className="px-4 w-screen table-auto border ">
                {Blogs.map(Blog=>(
                <tr className="px-16 text-center" key={Blog.id}>
                <td>{Blog.title}</td>
                <td>{Blog.body}</td>
                <td>{Blog.slug}</td>
                <th><Link className="bg-blue-500 px-6 py-2 border rounded-lg"  to={"edit/"+Blog.id}>Edit</Link></th>
                <th><Link className="bg-blue-500 px-6 py-2 border rounded-lg"  to={"show/"+Blog.id} >View</Link></th>
                <th><button className="bg-blue-500 px-6 py-2 border rounded-lg" onClick={()=>this.Delete(Blog.id)}>Delete</button></th>
                </tr>


                  ))}
              </tbody>

            </table>
            
          </div>
        )
      }
    }

export default BlogList;
