import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { paymentHandler } from '@/State/Wallet/Action'
import { DotFilledIcon } from '@radix-ui/react-icons'
import React from 'react'
import { useDispatch } from 'react-redux'

const TopupForm = () => {
  const [ amount,setAmount] = React.useState('')
  const [ paymentMethod,setPaymentMethod] = React.useState('RAZORPAY')
  const dispatch = useDispatch()

  const handlePaymentMethodChange = (value) => {
    setPaymentMethod (value)
  }


  const handleChange = (e) => {
    setAmount (e.target.value)
  }

  const handleSubmit = () => {
    console.log(amount,paymentMethod)
    dispatch(paymentHandler({jwt:localStorage.getItem("jwt"),paymentMethod,amount}))

  }

  return (
    <div className="pt-10 space-y-5">
      <div>
        <h1 className="pb-1">Enter Amount</h1>
        <Input
        onChange={handleChange}
        value={amount}
        className="py-7 text-lg"
        placeholder="$9999"/>
      </div>

      <div>
        <h1 className="pb-1">
          Select Payment Method
        </h1>
        <RadioGroup
        onValueChange={(value)=> handlePaymentMethodChange(value)} 
        className="flex"
        defaultValue="RAZORPAY">
          <div className="flex items-center space-x-2 border p-3 px-5 rounded-md">
            <RadioGroupItem 
            icon={DotFilledIcon}
            className="h-7 w-7"
            id="r1"
            value="RAZORPAY"/>

            <Label htmlFor="r1">

              <div className="bg-white rounded-md px-5 py-3 w-32 shadow-md">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Razorpay_logo.svg/1200px-Razorpay_logo.svg.png" alt=""/>

              </div>

            </Label>

          </div>



          <div className="flex items-center space-x-2 border p-3 px-5 rounded-md">
            <RadioGroupItem 
            icon={DotFilledIcon}
            className="h-7 w-7"
            id="r2"
            value="STRIPE"/>

            <Label htmlFor="r2">

              <div className="bg-white rounded-md px-4 w-32 shadow-md">
                <img className="h-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/768px-Stripe_Logo%2C_revised_2016.svg.png" alt=""/>

              </div>

            </Label>

          </div>

        </RadioGroup>
        <Button onClick={handleSubmit} className="w-full py-5 mt-5">
          Submit
        </Button>
      </div>

    </div>
  )
}

export default TopupForm