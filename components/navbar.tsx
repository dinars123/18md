import Link from "next/link"

const Navbar = () =>{
return <nav className="navbar">
    <Link href={"/"}>Home</Link>
    <Link href={"/addPost"}>addPost</Link>
    <Link href={"/login"}>Sign in</Link>
    <Link href={"/register"}>Register</Link>
</nav>
}

export default Navbar