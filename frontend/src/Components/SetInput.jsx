import { useState } from "react";
import { IoSend } from "react-icons/io5"
import axios from "axios";
import { useDispatch, useSelector } from "react-redux"
import { setMessages } from "../redux/messageSlice";
import { localBackendUrl } from "../hooks/utils";

const SetInput = () => {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const { selectedUser } = useSelector(store => store.user)
  const {messages} = useSelector(store =>store.message)

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${localBackendUrl}/api/v1/message/send/${selectedUser?._id}`, { message }, {
        header: {
          "ContentType": "application/json"
        },
        withCredentials: true
      });
      dispatch(setMessages([...messages,res?.data?.newMessage]))
      setMessage("") 
    } catch (error) {
      console.log(error.message);
    }

  }
  return (
    <form className="px-4 my-3" onSubmit={onSubmitHandler}>
      <div className="w-full relative">
        <input value={message} onChange={(e) => setMessage(e.target.value)} type="text" placeholder="Sead Message..." className="border text-sm rounded-lg block w-full bg-gray-600 text-white p-3 border-zinc-500" />
        <button type="submit" className="absolute flex inset-y-0 end-0 items-center pr-4">
          <IoSend />
        </button>
      </div>
    </form>
  )
}

export default SetInput