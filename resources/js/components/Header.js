import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import CreateBlog from './CreateBlog';

const Header=()=> (
   
        <div className="container-sm text-center">
            <Link to='/home' className="px-8 text-xl">Home</Link>
            <Link to='/create' className="text-xl px-6">Create Blog</Link>
        </div>

        
    );


export default Header;

