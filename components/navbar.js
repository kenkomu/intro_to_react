import { useState } from "react"
export default function Navbar(){

    const [isAuth,setisAuth] = useState(false)

    function toggleAuth(){
        setisAuth(!isAuth)
    }
    return(
    <nav className="flex justify-between px-10 py-7 bg-slate-300">

        <h1 className="text-purple-500 text-2xl font-bold">Banter</h1>

        {
            isAuth === true ? <button onClick={toggleAuth}>
                Sign In
            </button> : <p>You are not signed in</p>
        }
    </nav>
    )
}