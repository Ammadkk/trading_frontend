import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@/components/ui/input-otp'
import React, { useState } from 'react'

const AccountVerificationForm = () => {
    const [value,setValue] = useState("")

    const handleSubmit = () => {
        console.log(value)

    }

  return (
    <div className="flex justify-center">
        <div className="space-y-5 mt-10 w-full">
            <div className="flex justify-between items-center">
                <p>Email : </p>
                <p>kevin0@gmail.com</p>
                <Dialog>
                    <DialogTrigger>
                        <Button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Sent OTP</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                        <DialogTitle>Enter OTP</DialogTitle>
                        
                        </DialogHeader>
                        <div className="py-5 flex gap-5 justify-center items-center">

                        <InputOTP
                        value={value}
                        onChange={(value)=>setValue(value)}
                        maxLength={6}>
                            <InputOTPGroup>
                                <InputOTPSlot index={0} className="w-10 h-10 text-center border border-gray-500 rounded-md bg-gray-700"/>
                                <InputOTPSlot index={1} className="w-10 h-10 text-center border border-gray-500 rounded-md bg-gray-700"/>
                                <InputOTPSlot index={2} className="w-10 h-10 text-center border border-gray-500 rounded-md bg-gray-700"/>
                            </InputOTPGroup>
                            <InputOTPSeparator />
                            <InputOTPGroup>
                                <InputOTPSlot index={3} className="w-10 h-10 text-center border border-gray-500 rounded-md bg-gray-700"/>
                                <InputOTPSlot index={4} className="w-10 h-10 text-center border border-gray-500 rounded-md bg-gray-700"/>
                                <InputOTPSlot index={5} className="w-10 h-10 text-center border border-gray-500 rounded-md bg-gray-700"/>
                            </InputOTPGroup>
                        </InputOTP>
                        <DialogClose>
                            <Button 
                            onClick={handleSubmit}
                            className={"bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded w-[8rem]"}>Submit</Button>
                        </DialogClose>
                        </div>
                    </DialogContent>
                    </Dialog>

            </div>

        </div>

    </div>
  )
}

export default AccountVerificationForm