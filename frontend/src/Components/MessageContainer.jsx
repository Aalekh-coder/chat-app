import { useSelector } from "react-redux"
import Messages from "./Messages"
import SendInput from "./SetInput"

const MessageContainer = () => {
  const { selectedUser } = useSelector(store => store.user)

  return (
    <>{
      selectedUser !== null ? (<div className='md:min-w-[550px] flex flex-col'>
        <div className="flex gap-2 items-center cursor-pointer bg-blue-950 text-white">
          <div className="avatar avatar-online">
            <div className="w-12 p-2 rounded-full">
              <img src={selectedUser?.profilePhoto} alt="" />
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
        <h1>Let's start conversation</h1>
      )
    }
    </>

  )
}

export default MessageContainer