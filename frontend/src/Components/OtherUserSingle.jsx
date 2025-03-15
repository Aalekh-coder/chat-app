import React from 'react'
import { setSelectedUser } from '../redux/userSlice'
import { useDispatch, useSelector } from 'react-redux'

const OtherUserSingle = ({ user }) => {
    const dispatch = useDispatch()
    const { selectedUser, onlineUsers } = useSelector(store => store.user);

    const isOnline = onlineUsers?.includes(user._id)
    const selectedUserHandler = () => {
        dispatch(setSelectedUser(user));
    }

    return (
        <>
            <div onClick={()=> selectedUserHandler(user)} className={`${selectedUser?._id === user?._id? "bg-blue-400":""} flex gap-2 items-center hover:bg-pink-400 rounded-sm p-2 cursor-pointer`}>
                <div className={isOnline?"avatar avatar-online":"avatar avatar-offline"}>
                    <div className="w-12 rounded-full">
                        <img src={user?.profilePhoto || "https://github.com/shadcn.png"} alt="" />
                    </div>
                </div>

                <div className="flex flex-col flex-1">
                    <div className="flex justify-between gap-2">
                        <p>{user?.fullName}</p>
                    </div>
                </div>
            </div>
            <div className="divider my-0 py-0 h-1"></div>
        </>
    )
}

export default OtherUserSingle