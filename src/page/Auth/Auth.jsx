import React from 'react'
import "./Auth.css"
import SignupForm from './SignupForm'
import { Button } from '@/components/ui/button'
import { useLocation, useNavigate } from 'react-router-dom'
import ForgotPassForm from './ForgotPassForm'
import SigninForm from './SigninForm'

const Auth = () => {
  const navigate = useNavigate()
  const location = useLocation()
  return (
    <div className="h-screen relative authContainer">
        <div className="top-0 bottom-0 left-0 right-0 bg-[#030712] bg-opacity-50">
            <div className="bgBlur absolute top-1/2 left-1/2 transform -translate-x-1/2 
            -translate-y-1/2 flex flex-col justify-center items-center h-[30rem] w-[25rem] 
            rounded-md z-50 bg-black bg-opacity-50 shadow-2xl shadow-white px-7">

              <h1 className="text-6xl font-bold pb-9">
              <span className="font-bold text-orange-700">Zen</span>
              <span>Trade</span>
              </h1>

              {location.pathname=="/signup" ? <section className="w-full">
                <SignupForm/>
                <div className="flex items-center justify-center">
                  <span>Already have an account?</span>
                  <Button onClick={()=> navigate("/signin")} variant="ghost">
                    Signin</Button>

                </div>
              </section> : location.pathname=="/forgot-password" ? <section className="w-full">
                <ForgotPassForm/>
                <div className="flex items-center justify-center">
                  <span>Back to login</span>
                  <Button onClick={()=> navigate("/signin")} variant="ghost">
                    Signin</Button>

                </div>
              </section> : 
              <section className="w-full">
                <SigninForm/>
                <div className="flex items-center justify-center">
                  <span>If you dont have an account</span>
                  <Button onClick={()=> navigate("/signup")} variant="ghost">
                    Signup</Button>

                </div>

                <div className="flex items-center justify-center mt-10">
                  
                  <Button className="w-full py-5 mt-2 shadow-xl shadow-blue-950" onClick={()=> navigate("/forgot-password")} variant="outline">
                    Forgot Password</Button>

                </div>
                </section>}


            </div>

        </div>

    </div>
  )
}

export default Auth