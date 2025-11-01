import {Link,Outlet} from "react-router-dom"
const Layout=()=>{
    return(
        <>
        <Link to="home">Home</Link>|
        <Link to="display">Display</Link>|
        <Link to="insert">Insert</Link>|
        <Link to="update">Update</Link>|
        <Link to="edit">Edit</Link>|
        <Link to="search">Search</Link>
        <hr size="4" color="red"/>
        <Outlet/>
        <hr size="4" color="red"/>
        www.mern.com
        </>
    )
}
export default Layout;