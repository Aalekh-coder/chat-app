import { BiSearchAlt2 } from "react-icons/bi"
import OtherUsers from "./OtherUsers"
import axios from "axios"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setAuthUser, setOtherUser } from "../redux/userSlice"

const Sidebar = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");

    const { OtherUser } = useSelector(store => store.user);
    const dispatch = useDispatch()

    const searchSubmitHandler = (e) => {
        e.preventDefault();
        const conversationUser = OtherUser?.find((user) => user.fullName.toLowerCase().includes(search.toLowerCase()));
        if (conversationUser) {
            dispatch(setOtherUser([conversationUser]))
        } else {
            toast.error("User not found")
        }
    }

    const logoutHandler = async () => {
        try {
            const { data } = await axios.get("http://localhost:3000/api/v1/user/logout");
            navigate("/login");
            toast.success(data.message);
            dispatch(setAuthUser(null))
        } catch (error) {
            toast.error(error.message)
            console.log(error);
        }
    }

    return (
        <div className="border-r border-slate-500 p-4 flex flex-col">

            <form onSubmit={searchSubmitHandler} className="flex items-center gap-2">
                <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" className='input input-bordered rounded-md' placeholder='Search...' />
                <button type="submit" className="btn bg-zinc-500 text-white">
                    <BiSearchAlt2 className="w-6 h-6 outline-none" />
                </button>
            </form>
            <div className="divider px-2" />
            <OtherUsers />

            <div className="mt-2">
                <button onClick={logoutHandler} className="btn btn-sm">Logout</button>
            </div>
        </div>
    )
}

export default Sidebar