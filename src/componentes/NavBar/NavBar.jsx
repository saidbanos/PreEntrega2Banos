import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
        <Link to="/">
          <h1>Tienda de Electrónicos</h1>
        </Link>

        <nav>
            <ul>
                <li> 
                    <NavLink to="/categoria/1"> Modulos Arduino </NavLink>
                </li>

                <li>  
                    <NavLink to="/categoria/2"> Modulos Shield </NavLink>
                </li>
                
            </ul>
        </nav>

        <CartWidget/>
    </header>
  )
}

export default NavBar