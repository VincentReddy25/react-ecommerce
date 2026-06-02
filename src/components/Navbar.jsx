import Shop from './Shop'
import Cart from './Cart'
import MyAccount from './MyAccount'
import Login from './Login'
import Register from './Register'
import { Link, Routes, Route } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <section className="navbar">
                <Link to='/shop'>Shop</Link>
                <Link to='/cart'>Cart</Link>
                <Link to='/account'>My Account</Link>
                <Link to='/register'>Register</Link>
                <Link to='/login'>Login</Link>
            </section>

            <Routes>
                <Route path='/' element={<Shop />} />
                <Route path='/shop' element={<Shop />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/account' element={<MyAccount />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </>
    )
}

