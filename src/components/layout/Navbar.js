 import React, { Component } from 'react'
 import { Link } from 'react-router-dom'
//  import PropTypes from 'prop-types'

 
 
 export default class Navbar extends Component {
     render() {
         return (
             <nav className='navbar bg-primary'>
                 <h1>
                     <i className='fab fa-github' /> Github google </h1>

                     <ul>
                         <li>
                             <Link to='/'> Home </Link>
                         </li>
                         <li>
                             <Link to='/about'> About </Link>
                         </li>
                     </ul>
  
             </nav>
         )
     }
 }

 