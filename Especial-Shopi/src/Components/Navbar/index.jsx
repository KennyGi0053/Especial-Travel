import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { NavLink } from "react-router-dom"

const Navbar = () => {
    const activeStyle = 'underline underline-offset-8 underline decoration-pink-800'  
    const context = useContext(ShoppingCartContext)
  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
        <ul className="flex items-center gap-3">
            <li className="font-semibold text-lg">
                <NavLink to='/'> 
                Especial Shopi
                </NavLink>
            </li>
            <li>
                <NavLink 
                to='/'
                className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                }>
                 All
                </NavLink>
            </li>
            <li>
                <NavLink
                to='/clothes'
                className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                }>
                    Clothes
                </NavLink>
            </li>
            <li>
                <NavLink 
                to='/electronics'
                className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                }>
                    Electronics
                </NavLink>
            </li>
            <li>
                <NavLink 
                to='/furnitures'
                className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                }>
                    Furnitures
                </NavLink>
            </li>
            <li>
                <NavLink 
                to='/toys'
                className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                }>
                    Toys
                </NavLink>
            </li>
            <li>
                <NavLink 
                to='/others'
                className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                }>
                    Others
                </NavLink>
            </li>
        </ul>
        <ul className="flex items-center gap-3">
            <li className="text-black/60">
                kennygabriel00@gmail.com
            </li>
            <li>
                <NavLink 
                to='/myorders'
                className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                }>
                    MyOrders
                </NavLink>
            </li>
            <li>
                <NavLink 
                to='/myaccount'
                className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                }>
                    My Account
                </NavLink>
            </li>
            <li>
                <NavLink 
                to='/signin'
                className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                }>
                    Sign In
                </NavLink>
            </li>
            <li className="flex items-center">
             <ShoppingBagIcon className="h-6 w-6 text-black"></ShoppingBagIcon> 
            <div>
             {context.count}
            </div>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar