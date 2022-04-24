import React from 'react'
import {Link} from 'react-router-dom'
import '../Asset/Navbar/Navbar.scss'

const Navbar = () => {
    return(
        <>
            <p className='Title'>Django React App</p>
            <section className='Navbar'>
                <Link className='Navbar__Home' to="">Home</Link>
                <Link className='Navbar__Department' to="Department/">Department</Link>
                <Link className='Navbar__Employee' to="">Employee</Link>
            </section>
        </>
    );
}
 
export default React.memo(Navbar)