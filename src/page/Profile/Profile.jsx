// import { Badge } from '@/components/ui/badge';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
// import { VerifiedIcon } from 'lucide-react';
// import React from 'react';
// import AccountVerificationForm from './AccountVerificationForm';
// import ProfileDetailsForm from './ProfileDetailsForm'; // Import your new form component
// import { useSelector } from 'react-redux';

// const Profile = () => {
//   const { auth } = useSelector((store) => store);

//   const handleEnableTwoStepVerification = () => {
//     console.log("two step verification");
//   };

//   const handleProfileSubmit = (updatedData) => {
//     console.log("Updated profile data:", updatedData);
//     // Here you would typically dispatch an action to update the profile in your store
//   };

//   return (
//     <div>
//       {/* <div>
//         <Button className="items-center">Add Personal Details</Button>
//       </div> */}

//       <div className="flex flex-col items-center mb-5">
//         <div className="pt-10 w-full lg:w-[60%]">
//           <Card>
//             <CardHeader className="pb-9 text-xl">
//               <CardTitle>Your Information</CardTitle>
//             </CardHeader>
//             <CardContent>
//               {/* Use ProfileDetailsForm and pass user data */}
//               <ProfileDetailsForm initialValues={{
//                 email: auth.user?.email || '',
//                 fullName: auth.user?.fullName || '',
//                 dob: '', // You might want to retrieve DOB from your store
//                 nationality: '', // Set this from your state/store as necessary
//                 address: '', // Update these fields as per your state/store
//                 city: '',
//                 postcode: '',
//                 country: '',
//               }} onSubmit={handleProfileSubmit} />
//             </CardContent>
//           </Card>

//           <div className="mt-6">
//             <Card className="w-full">
//               <CardHeader className="pb-7">
//                 <div className="flex items-center gap-3">
//                   <CardTitle>2 Step Verification</CardTitle>
//                   {true ? (
//                     <Badge className={"text-white space-x-2 bg-green-600"}>
//                       <VerifiedIcon />
//                       <span>Enabled</span>
//                     </Badge>
//                   ) : (
//                     <Badge className={"bg-orange-500"}>Disabled</Badge>
//                   )}
//                 </div>
//               </CardHeader>

//               <CardContent>
//                 <div>
//                   <Dialog>
//                     <DialogTrigger>
//                       <Button>Enable Two Step Verification</Button>
//                     </DialogTrigger>
//                     <DialogContent>
//                       <DialogHeader>
//                         <DialogTitle>Verify your account</DialogTitle>
//                       </DialogHeader>
//                       <AccountVerificationForm handleSubmit={handleEnableTwoStepVerification} />
//                     </DialogContent>
//                   </Dialog>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { VerifiedIcon } from 'lucide-react';
import React, { useState } from 'react';
import ProfileDetailsForm from './ProfileDetailsForm';
import AccountVerificationForm from './AccountVerificationForm'; // Import your verification form component
import { useSelector } from 'react-redux';
import { Badge } from '@/components/ui/badge';

const Profile = () => {
  const { auth } = useSelector((store) => store);
  const [submittedProfile, setSubmittedProfile] = useState(null); // Track submitted profile data
  const [isTwoStepEnabled, setIsTwoStepEnabled] = useState(false); // Track two-step verification status

  const handleProfileSubmit = (updatedData) => {
    console.log('Updated profile data:', updatedData);
    setSubmittedProfile(updatedData); // Save submitted data
  };

  const handleEnableTwoStepVerification = () => {
    console.log("two step verification");
    setIsTwoStepEnabled(true); // Set two-step verification status
  };

  return (
    <div className="px-20"> {/* Added padding on the x-axis */}
      <div className="flex flex-col items-start mb-5 pt-10 w-full lg:w-[60%]"> {/* Updated padding to pt-10 */}

        {/* Profile Details Section */}
        <h2 className="text-3xl font-bold text-white mb-4">Profile Details</h2>
        {!submittedProfile ? (
          <Dialog>
            <DialogTrigger>
              <Button className="py-6 mt-4 font-semibold">Enter Profile Details</Button>
            </DialogTrigger>
            <DialogContent>
              <ProfileDetailsForm
                initialValues={{
                  email: auth.user?.email || '',
                  fullName: auth.user?.fullName || '',
                  dob: '',
                  nationality: '',
                  address: '',
                  city: '',
                  postcode: '',
                  country: '',
                }}
                onSubmit={handleProfileSubmit}
              />
            </DialogContent>
          </Dialog>
        ) : (
          // Display submitted details in a card
          <Card className="w-full max-w-xl mx-auto p-6">
            <CardHeader>
              <CardTitle className="text-xl">{submittedProfile.fullName}</CardTitle>
              <CardDescription className="text-xl">Email: {submittedProfile.email}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3"> {/* Added spacing for better layout */}
              <div className="flex items-center">
                <p className="w-32 font-medium">DOB</p>
                <p className="text-gray-400">: {submittedProfile.dob}</p>
              </div>
              <div className="flex items-center">
                <p className="w-32 font-medium">Nationality</p>
                <p className="text-gray-400">: {submittedProfile.nationality}</p>
              </div>
              <div className="flex items-center">
                <p className="w-32 font-medium">Address</p>
                <p className="text-gray-400">: {submittedProfile.address}</p>
              </div>
              <div className="flex items-center">
                <p className="w-32 font-medium">City</p>
                <p className="text-gray-400">: {submittedProfile.city}</p>
              </div>
              <div className="flex items-center">
                <p className="w-32 font-medium">Postcode</p>
                <p className="text-gray-400">: {submittedProfile.postcode}</p>
              </div>
              <div className="flex items-center">
                <p className="w-32 font-medium">Country</p>
                <p className="text-gray-400">: {submittedProfile.country}</p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Two-Step Verification Section */}
        <div className="mt-6 w-full"> {/* Ensuring the verification card spans the full width */}
          <Card className="w-full">
            <CardHeader className="pb-7">
              <div className="flex items-center gap-3">
                <CardTitle>2 Step Verification</CardTitle>
                {isTwoStepEnabled ? (
                  <Badge className={"text-white space-x-2 bg-green-600"}>
                    <VerifiedIcon />
                    <span>Enabled</span>
                  </Badge>
                ) : (
                  <Badge className={"bg-orange-500"}>Disabled</Badge>
                )}
              </div>
            </CardHeader>

            <CardContent>
              <div>
                <Dialog>
                  <DialogTrigger>
                    <Button onClick={handleEnableTwoStepVerification}>Enable Two Step Verification</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Verify your account</DialogTitle>
                    </DialogHeader>
                    <AccountVerificationForm handleSubmit={handleEnableTwoStepVerification} />
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;



