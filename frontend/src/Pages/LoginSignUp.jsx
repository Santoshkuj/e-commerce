import { useContext, useState } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import { ShopContext } from "../Context/ShopContext";

const LoginSignUp = ({ menu }) => {
  const [state, setState] = useState("Login");
  const navigate = useNavigate()
  const {setToken} = useContext(ShopContext)

  const [data,setData] = useState({
    name:'',
    email:'',
    password:''
  })
const handleData = (e)=>{
  const{name,value} = e.target;
  setData({
    ...data,
    [name]:value
  })
}
async function logIn(e) {
  e.preventDefault()
  if (!data.email || !data.password) {
    return alert('all fields are required')
  }
  try {
    const res = await axios.post('http://localhost:5004/api/user/login',{
      password: data.password,
      email: data.email
    })
    if (res.data.success) {
      setToken(localStorage.setItem('auth-token',res.data.token))
      navigate('/')
    }
  } catch (error) {
    return alert(error.response.data.message)
  }
}
async function signUp(e) {
  e.preventDefault()
  if (!data.email || !data.password || !data.name) {
    return alert('all fields are required')
  }
  try {
    const res = await axios.post('http://localhost:5004/api/user/signup',data)
  if (res.data.success) {
    setToken(localStorage.setItem('auth-token',res.data.token))
    navigate('/')
  }
  } catch (error) {
      return alert(error.data.message)
  }
}

  return (
    <form
      onSubmit={(e)=>{state==='Login'?logIn(e):signUp(e)}}
      className={`${
        menu ? "" : ""
      } lg:p-0 w-full h-full bg-[#fce3fe] lg:py-14 py-8`}
    >
      <div className="w-[75%] h-[90%] lg:w-[40%] bg-white m-auto py-2 px-14 text-center">
        <h1 className="my-5 text-3xl">{state}</h1>
        <div className="flex flex-col gap-7 mt-7">
          {state === "Login" ? (
            <></>
          ) : (
            <input
              onChange={handleData}
              name="name"
              value={data.name}
              type="text"
              placeholder="Your Name"
              className="h-11 lg:h-12 w-full pl-5 border border-[#c9c9c9] outline-none text-[#5c5c5c] text-lg"
            />
          )}
          <input
            onChange={handleData}
            name="email"
            value={data.email}
            type="email"
            placeholder="Email Address"
            className="h-11 lg:h-12 w-full pl-5 border border-[#c9c9c9] outline-none text-[#5c5c5c] text-lg"
          />
          <input
            onChange={handleData}
            name="password"
            value={data.password}
            type="password"
            placeholder="Password"
            className="h-11 lg:h-12 w-full pl-5 border border-[#c9c9c9] outline-none text-[#5c5c5c] text-lg"
          />
        </div>
        <button className="w-full h-11 lg:h-12 text-white bg-[#ff4141] border-none text-2xl font-medium cursor-pointer mt-6"
        type="submit">
          Continue
        </button>
        {state === "SignUp" ? (
          <p className="mt-4 lg:mt-3 text-[#5c5c5c] text-lg font-medium">
            Already have an account?
            <span
              className="text-[#ff4141] font-semibold cursor-pointer"
              onClick={() => setState("Login")}
            >
              {" "}
              Login here
            </span>
          </p>
        ) : (
          <p className="mt-4 lg:mt-3 text-[#5c5c5c] text-lg font-medium">
            Create an account?
            <span
              className="text-[#ff4141] font-semibold cursor-pointer"
              onClick={() => setState("SignUp")}
            >
              {" "}
              SignUp
            </span>
          </p>
        )}
        <div className="flex items-center my-5 gap-2 text-[#5c5c5c] font-medium relative">
          <input type="checkbox" required/>
          <p>By continueing, i agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </form>
  );
};

export default LoginSignUp;
