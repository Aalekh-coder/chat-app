import { useEffect } from 'react'
import axios from "axios"
import {useDispatch} from "react-redux"
import { setOtherUser } from '../redux/userSlice';

const UseGetOtherUsers = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchOtherUsers = async () => {
            try {
                axios.defaults.withCredentials = true
                const {data} = await axios.get("http://localhost:3000/api/v1/user");
                dispatch(setOtherUser(data))
               
            } catch (error) {
                console.log(error);
            }
        }
        fetchOtherUsers()
    }, [])

}

export default UseGetOtherUsers