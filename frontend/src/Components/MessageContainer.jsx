import { useSelector } from "react-redux"
import Messages from "./Messages"
import SendInput from "./SetInput"



const MessageContainer = () => {
  const { selectedUser, authUser,onlineUsers } = useSelector(store => store.user)

const isOnline = onlineUsers?.includes(selectedUser._id)
  return (
    <>{
      selectedUser !== null ? (<div className='md:min-w-[550px] flex flex-col'>
        <div className="flex gap-2 items-center cursor-pointer bg-blue-950 text-white">
          <div className={isOnline?"avatar avatar-online":"avatar avatar-offline"}>
            <div className="w-12 p-2 rounded-full">
              <img src={selectedUser?.profilePhoto} />
            </div>
          </div>

          <div className="flex flex-col flex-1">
            <div className="flex justify-between gap-2">
              <p>{selectedUser?.fullName}</p>
            </div>
          </div>
        </div>
        <Messages />
        <SendInput />
      </div>) : (

        <div className='md:min-w-[550px] flex flex-col justify-center items-center'>
          <h1>Hi, {authUser?.fullName}</h1>
          <h1 className="text-2xl text-white">Let's start conversation</h1>

        </div>
      )
    }
    </>

  )
}

export default MessageContainer