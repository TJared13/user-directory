import React from 'react'


const Nav = (props) => {
    return (
        <div className='buttonAlign'>
            <button  onClick={props.back}>&lt; Previous</button>
            <button className='options'>Edit</button>
            <button className='options'>Delete</button>
            <button className='options'>New</button>
            <button onClick={props.forward}>Next &gt;</button>
            
        </div>
    )
}

export default Nav;