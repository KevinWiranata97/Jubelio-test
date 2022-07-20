import NavBar from "../components/NavBar";
import { useState } from "react"
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
export default function LoginViews() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
async function login(e) {
  e.preventDefault();
   try {
    const data = {
     email,
     password
    }
    const response = await axios({
      method: "POST",
      url: `http://localhost:3000/login`,
      data: data
    });

    console.log(response);
    localStorage.setItem("Authorization", response.data.access_token);
    localStorage.setItem("username", response.data.user_name);
    Swal.fire(
      'Good job!',
      'Login Successfully!',
      'success'
    )
   
    navigate('/')
   } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error.response.data.message,
    })
   }
    
 }
  return (
    <>
      <div className="container mx-auto p-5">
        <NavBar></NavBar>
      </div>

      <div className="container py-16 mx-auto">
        <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden text-justify">
          <h2 className="text-2xl uppercase font-medium mb-1">Login</h2>
          <p className="text-gray-600 mb-6 text-sm">
            Login to your account to continue.
          </p>
          <form onSubmit={login}>
            <div className="space-y-3">
              <div>
                <label for="email" className="text-gray-600 mb-2 block">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded  focus:border-red-500"
                  placeholder="Enter your email address"
                ></input>
              </div>
              <div>
                <label for="password" className="text-gray-600 mb-2 block">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded"
                  placeholder="Enter your password "
                ></input>
              </div>
            </div>

            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center">
                <input type="checkbox" id="remember" className="text-red-500 focus:ring-0 rounded-sm cursor-pointer"></input>
                <label for="agreement" className="text-gray-600 ml-2 cursor-pointer">Remember me</label>
              </div>
              <a href="/" className="text-red-500">Forgot password</a>
            </div>

            <div className="mt-4">
              <button type="submit" className="block w-full py-2 text-center bg-red-500 text-white border border-red-500 rounded hover:bg-transparent hover:text-red-500 transition font-medium">
                LOGIN
              </button>
            </div>
            
            <div className="flex items-center justify-between mt-6">
              
              <a href="/register" >Dont have an account?<span className="text-red-500 ml-1 hover:text-slate-600">Register now</span></a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
