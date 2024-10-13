import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { VerifiedIcon } from 'lucide-react'
import React from 'react'
import AccountVerificationForm from './AccountVerificationForm'
import { useSelector } from 'react-redux'
import { store } from '@/State/Store'

const Profile = () => {
  const {auth} = useSelector(store=>store)

  const handleEnableTwoStepVerification = () => {
    console.log("two step verification")
  }
  return (
    <div className="flex flex-col items-center mb-5">
      <div className="pt-10 w-full lg:w-[60%]">
        <Card>
          <CardHeader className="pb-9 text-xl">
            <CardTitle>
              Your Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="lg:flex gap-32">
              <div className="space-y-7">
                <div className="flex">
                <p className="w-[9rem]">Email : </p>
                <p className="text-gray-500">{auth.user?.email}</p>
                </div>

                <div className="flex">
                <p className="w-[9rem]">Full Name : </p>
                <p className="text-gray-500">{auth.user?.fullName}</p>
                </div>

                <div className="flex">
                <p className="w-[9rem]">DOB : </p>
                <p className="text-gray-500">30/11/2003</p>
                </div>

                <div className="flex">
                <p className="w-[9rem]">Nationality : </p>
                <p className="text-gray-500">Pakistani</p>
                </div>
              </div>

              <div className="lg:flex gap-32">
              <div className="space-y-7">
                <div className="flex">
                <p className="w-[9rem]">Address : </p>
                <p className="text-gray-500">Steel Town</p>
                </div>

                <div className="flex">
                <p className="w-[9rem]">City : </p>
                <p className="text-gray-500">Karachi</p>
                </div>

                <div className="flex">
                <p className="w-[9rem]">Postcode : </p>
                <p className="text-gray-500">2605</p>
                </div>

                <div className="flex">
                <p className="w-[9rem]">Country : </p>
                <p className="text-gray-500">Pakistan</p>
                </div>
              </div>
            </div>
            </div>

          </CardContent>
        </Card>

        <div className="mt-6">
          <Card className="w-full">
            <CardHeader className="pb-7">
              <div className="flex items-center gap-3">
                <CardTitle>2 Step Verification</CardTitle>
                {true? <Badge className={"text-white space-x-2 bg-green-600"}>
                  <VerifiedIcon/>
                    <span>Enabled</span>
                </Badge>: <Badge className={"bg-orange-500"}>Disabled</Badge>}

              </div>
            </CardHeader>

            <CardContent>
              <div>
              <Dialog>
                <DialogTrigger>
                  <Button>Enable Two Step Verification</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Verify your account</DialogTitle>
                    
                  </DialogHeader>
                  <AccountVerificationForm handleSubmit={handleEnableTwoStepVerification}/>
                </DialogContent>
              </Dialog>

              </div>
            </CardContent>

          </Card>

        </div>

      </div>

    </div>
  )
}

export default Profile