import { BiSearchAlt2 } from "react-icons/bi"
import OtherUsers from "./OtherUsers"
import axios from "axios"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

const Sidebar = () => {
    const navigate = useNavigate()

    const logoutHandler = async () => {
        try {
            const { data } = await axios.get("http://localhost:3000/api/v1/user/logout");
            navigate("/login");
            toast.success(data.message)
        } catch (error) {
            toast.error(error.message)
            console.log(error);
        }
    }

    return (
        <div className="border-r border-slate-500 p-4 flex flex-col">

            <form className="flex items-center gap-2">
                <input type="text" className='input input-bordered rounded-md' placeholder='Search...' />
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