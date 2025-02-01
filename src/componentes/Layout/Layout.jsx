import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/Navbar"

const Layout = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    )
}

Layout.propTypes = {}

export default Layout