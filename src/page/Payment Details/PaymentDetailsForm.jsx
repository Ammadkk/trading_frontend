
import { Button } from '@/components/ui/button';
import { DialogClose } from '@/components/ui/dialog';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { addPaymentDetails } from '@/State/Withdrawal/Action';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import PaymentDetails from './PaymentDetails';

const PaymentDetailsForm = () => {
    
    const dispatch = useDispatch()
    const form = useForm({
        resolver: "", // Resolver is not necessary for now
        defaultValues: {
            accountHolderName: "",
            ifsc: "",
            accountNumber: "",
            bankName: ""
        }
    });

    const onSubmit = (data) => {
        dispatch(addPaymentDetails({
            paymentDetails:data,
            jwt:localStorage.getItem("jwt")

        }))
        console.log(data);
    };

    

    return (
        <div className="px-7 py-2">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                    <FormField
                        control={form.control}
                        name="accountHolderName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Account Holder Name</FormLabel>
                                <FormControl>
                                    <Input
                                        // name="accountHolderName"
                                        className="border w-full text-white p-5"
                                        placeholder="Zen Trade" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="ifsc"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>ISFC</FormLabel>
                                <FormControl>
                                    <Input
                                        // name="ifsc"
                                        className="border w-full text-white p-5"
                                        placeholder="JSB********" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="accountNumber"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Account Number</FormLabel>
                                <FormControl>
                                    <Input
                                        // name="accountNumber"
                                        className="border w-full text-white p-5"
                                        placeholder="*********4603" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="confirmAccountNumber"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Confirm Account Number</FormLabel>
                                <FormControl>
                                    <Input
                                        // name="accountNumber"
                                        className="border w-full text-white p-5"
                                        placeholder="confirm account number" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="bankName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Bank Name</FormLabel>
                                <FormControl>
                                    <Input
                                        // name="accountNumber"
                                        className="border w-full text-white p-5"
                                        placeholder="JS Bank" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <DialogClose className="w-full">
                        <Button type="submit" className="w-full py-5 mt-2">Submit</Button>  
                    </DialogClose>
                </form>
            </Form>
        </div>
    );
};

export default PaymentDetailsForm;











// import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
// import { Input } from '@/components/ui/input'
// import React from 'react'
// import { useForm } from 'react-hook-form'

// const PaymentDetailsForm = () => {
//     const form=useForm({
//         resolver:"",
//         defaultValues:{
//             accountHolderName:"",
//             ifsc:"",
//             accountNumber:"",
//             bankName:""
//         }
//     })
//     const onSubmit = (data)=>{
//         console.log(data)
//     }



//   return (
//     <div className="px-10 py-2">

//         <Form {...form}>
//             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6"></form>

//             <FormField
//   control={form.control}
//   name="accountHolderName"
//   render={({ field }) => (
//     <FormItem>
//       <FormLabel>Account Holder Name</FormLabel>
//       <FormControl>
//         <Input 
//         className="border w-full text-gray-700 p-7"
//         placeholder="Zen Trade" {...field} />
//       </FormControl>
//       <FormDescription>This is your public </FormDescription>
//       <FormMessage />
//     </FormItem>
//   )}
// />

//         </Form>

//     </div>

//   )
// }

// export default PaymentDetailsForm


