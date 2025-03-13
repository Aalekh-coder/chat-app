import { useSelector } from "react-redux"
import UseGetOtherUsers from "../hooks/UseGetOtherUsers"
import OtherUserSingle from "./OtherUserSingle"

const OtherUsers = () => {
// my custom hook
    UseGetOtherUsers()

    const { OtherUser } = useSelector(store => store.user);
    
    if (!OtherUser) return;

    return (
        <div className="overflow-auto flex-1">
            {
                OtherUser?.map((user) => {
                    return (
                        <OtherUserSingle key={user._id} user={user}/>
                    )
                })
            }
        </div>
    )
}

export default OtherUsers
