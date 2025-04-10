import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setMessages } from '../redux/messageSlice'
import { localBackendUrl } from './utils'

const UseGetMessage = () => {

    const { selectedUser } = useSelector(store => store.user)
    const dispatch = useDispatch()
    useEffect(() => {
        const fetchMessages = async () => {
            try {
                axios.defaults.withCredentials = true;
                const res = await axios.get(`${localBackendUrl}/api/v1/message/${selectedUser?._id}`);
                dispatch(setMessages(res.data));
            } catch (error) {
                console.log(error.message)
            }
        }

        fetchMessages()
    }, [selectedUser])
}

export default UseGetMessage