
import { Button } from '@/components/ui/button';
import { DialogClose } from '@/components/ui/dialog';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { register } from '@/State/Auth/Action';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

const SignupForm = () => {
    const dispatch = useDispatch()
    const form = useForm({
        resolver: "", // Resolver is not necessary for now
        defaultValues: {
            fullName: "",
            email: "",
            password: "",
        }
    });

    const onSubmit = (data) => {
        dispatch(register(data))
        console.log(data);
    };

    

    return (
        <div>
          <h1 className="text-xl font-bold text-center pb-3">Create New Account</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                    <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        // name="accountHolderName"
                                        className="border w-full text-white p-5"
                                        placeholder="Ammad Khan" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        // name="ifsc"
                                        className="border w-full text-white p-5"
                                        placeholder="ammadk@gmail.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        // name="accountNumber"
                                        type="password"
                                        className="border w-full text-white p-5"
                                        placeholder="Choose a strong password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div>
                        <Button type="submit" className="w-full py-5 mt-3">Submit</Button>  

                    </div>

                                 
                </form>
            </Form>
        </div>
    );
};

export default SignupForm;

