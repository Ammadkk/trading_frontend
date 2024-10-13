
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import React from 'react';
import { useForm } from 'react-hook-form';

const ForgotPassForm = () => {
    const form = useForm({
        resolver: "", // Resolver is not necessary for now
        defaultValues: {
            email: "",
            password: "",
        }
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    

    return (
        <div>
            <h1 className="text-xl font-bold text-center pb-3">Forgot password</h1>
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
                                        placeholder="Enter your email.." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div>
                        <Button type="submit" className="w-full py-5 mt-2">Submit</Button>  

                    </div>


                </form>
            </Form>
        </div>
    );
};

export default ForgotPassForm;

