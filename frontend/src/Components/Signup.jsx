import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"
import toast from 'react-hot-toast';
import { localBackendUrl } from '../hooks/utils';

const Signup = () => {

  const navigate = useNavigate()

  const [user, setUser] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: ""
  });

  const handlCheckbox = (gender) => {
    setUser({ ...user, gender })
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${localBackendUrl}/api/v1/user/register`, user, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      })
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login")
      }
    } catch (error) {
      console.log(error);
      toast.error("Some")
    }
    setUser({
      fullName: "",
      username: "",
      password: "",
      confirmPassword: "",
      gender: ""
    })
  }

  return (
    <div className='min-w-96 mx-auto'>
      <div className='w-full p-6 shadow-md  rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-zinc-600'>
        <h1 className='text-3xl font-bold text-center '>SignUp</h1>
        <form onSubmit={onSubmitHandler}>
          <div>
            <label htmlFor="" className='label p-2'>
              <span className='text-base label-text'>Full Name</span>
            </label>
            <input value={user.fullName} onChange={(e) => setUser({ ...user, fullName: e.target.value })} type="text" placeholder='Enter You name' className='w-full input input-bordered' />
          </div>
          <div>
            <label htmlFor="" className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} type="text" placeholder='Enter You Username' className='w-full input input-bordered' />
          </div>
          <div>
            <label htmlFor="" className='label p-2'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} placeholder='Enter You Password' type="password" className='w-full input input-bordered' />
          </div>
          <div>
            <label htmlFor="" className='label p-2'>
              <span className='text-base label-text'>Confirm Password</span>
            </label>
            <input value={user.confirmPassword} onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })} type="password" placeholder='Enter Confirm Password' className='w-full input input-bordered' />
          </div>
          <div className='flex items-center my-4 gap-3'>
            <div className='flex items-center gap-3'>
              <p>Male</p>
              <input type="checkbox" className="checkbox" checked={user.gender === "male"} onChange={() => handlCheckbox("male")} />
            </div>
            <div className='flex items-center gap-3'>
              <p>Female</p>
              <input type="checkbox" className="checkbox" checked={user.gender === "female"} onChange={() => handlCheckbox("female")} />
            </div>
          </div>

          <div className='flex items-center justify-center mt-4 '>
            <Link to="/login" >
              Already have an account? Signup
            </Link>
          </div>


          <div><button type='submit' className='btn btn-block btn-sm btn-primary mt-2 border border-slate-700'>SignUp</button></div>
        </form>
      </div>
    </div>
  )
}

export default Signup