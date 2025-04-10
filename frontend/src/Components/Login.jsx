import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { setAuthUser } from '../redux/userSlice';
import { localBackendUrl } from '../hooks/utils';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()


  const [user, setUser] = useState({
    username: "",
    password: ""
  });


  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const {data} = await axios.post(`${localBackendUrl}/api/v1/user/login`, user, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      })
      toast.success("User login successfully");
      navigate("/");
      dispatch(setAuthUser(data))
    } catch (error) {
      console.log(error);
      toast.error("error while login")
    }

    setUser({
      username: "",
      password: "",
    })
  }

  return (
    <div className='min-w-96 mx-auto'>
      <div className='w-full p-6 shadow-md  rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-zinc-600'>
        <h1 className='text-3xl font-bold text-center '>Login</h1>
        <form onSubmit={onSubmitHandler}>
          <div>
            <label htmlFor="" className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input type="text" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} placeholder='Enter You name' className='w-full input input-bordered' />
          </div>
          <div>
            <label htmlFor="" className='label p-2'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} placeholder='Enter You name' type="password" className='w-full input input-bordered' />
          </div>

          <div className='flex items-center justify-center mt-4 '>
            <Link to="/register" className=''>
              Don't have an account? Login
            </Link>
          </div>



          <div><button type="submit" className='btn btn-block btn-sm btn-primary mt-2 border border-slate-700'>Login</button></div>
        </form>
      </div>
    </div>
  )
}

export default Login