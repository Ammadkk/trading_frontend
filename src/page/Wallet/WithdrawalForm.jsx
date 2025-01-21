import { Button } from '@/components/ui/button'
import { DialogClose } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { withdrawalRequest, getPaymentDetails } from '@/State/Withdrawal/Action'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'


const WithdrawalForm = () => {

  const [amount, setAmount] = React.useState('')
  const dispatch = useDispatch()
  const {wallet,withdrawal} = useSelector(store => store)

  const handleChange = (e) => {
    setAmount(e.target.value)

  }
// name is acc to my understanding

  const handleWithdraw = () => {
    dispatch(withdrawalRequest({amount,jwt:localStorage.getItem("jwt")}))
    console.log(amount)
  }

  useEffect(() => {
    if (!withdrawal.paymentDetails) {
      dispatch(getPaymentDetails({ jwt: localStorage.getItem("jwt") }))
    }
  }, [dispatch, withdrawal.paymentDetails])

  return (
    <div className="pt-10 space-y-5">
      <div className="flex justify-between items-center rounded-md bg-slate-900 text-xl font-bold px-5 py-4">
        <p>Available Balance</p>
        <p>${wallet.userWallet.balance}</p>
      </div>
      <div className="flex flex-col items-center">
        <h1 className='pb-3'>Enter Withdrawal Amount</h1>
        <div className="flex items-center justify-center">
          <Input
            onChange={handleChange}
            value={amount}
            type="number"
            className="withDrawalInput py-7 border-none outline-none focus:outline-none px-0 text-2xl text-center"
            placeholder="$9999"
          />
        </div>
      </div>
      <div>
        <p className="pb-2">Transfer to</p>
        <div className="flex items-center gap-5 px-5 py-2 rounded-md">
          <img className="h-8 w-8" src="https://cdn.pixabay.com/photo/2020/02/18/11/03/bank-4859142_1280.png" alt="" />
          <div>
            <p className="text-xl font-bold">{withdrawal.paymentDetails?.bankName}</p>
            <p className="text-xs">
              {withdrawal.paymentDetails?.accountNumber
                ? `*******${withdrawal.paymentDetails?.accountNumber.slice(7)}`
                : ''}
            </p>
          </div>
        </div>
      </div>
      <div>
        <DialogClose className="w-full">
          <Button onClick={handleWithdraw} className="w-full py-5 mt-3">
          Withdraw
          </Button>
        </DialogClose>
        
      </div>
    </div>
  )
}

export default WithdrawalForm
