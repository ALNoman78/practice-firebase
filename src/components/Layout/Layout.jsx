import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

const Layout = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}

Layout.propTypes = {}

export default Layout