
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { login } from '@/State/Auth/Action';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const SigninForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const form = useForm({
        resolver: "", // Resolver is not necessary for now
        defaultValues: {
            email: "",
            password: "",
        }
    });

    const onSubmit = (data) => {
        dispatch(login(data,navigate))
        console.log(data);
    };

    

    return (
        <div>
          <h1 className="text-xl font-bold text-center pb-3">Login</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                    

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
                                        placeholder="Your password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div>
                        <Button type="submit" className="w-full py-5 mt-3">Login</Button>  

                    </div>

                                 
                </form>
            </Form>
        </div>
    );
};

export default SigninForm;

