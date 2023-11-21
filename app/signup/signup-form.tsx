'use client';

import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const formSchema = z.object({
	email: z
		.string()
		.min(2, {
			message: 'email must be at least 2 characters.',
		})
		.email({ message: 'Invalid email address' }),
	password: z.string().min(8, {
		message: 'Password should contain atleast 8 characters',
	}),
});

export function SignupFormDemo() {
	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
	}
	return (
		<Card>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<CardHeader className="space-y-1">
						<CardTitle className="text-2xl">
							Create an account
						</CardTitle>
						<CardDescription>
							Enter your email below to create your account
						</CardDescription>
					</CardHeader>
					<CardContent className="grid gap-4">
						<div className="grid gap-2">
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input
												placeholder="user@example.com"
												{...field}
											/>
										</FormControl>
										{/* <FormDescription>
											This is your public display name.
										</FormDescription> */}
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<div className="grid gap-2">
							<FormField
								control={form.control}
								name="password"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Password</FormLabel>
										<FormControl>
											<Input type="password" {...field} />
										</FormControl>
										{/* <FormDescription>
											This is your public display name.
										</FormDescription> */}
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<div className="relative">
							<div className="absolute inset-0 flex items-center">
								<span className="w-full border-t" />
							</div>
							<div className="relative flex justify-center text-xs uppercase">
								<span className="bg-background px-2 text-muted-foreground">
									Or continue with
								</span>
							</div>
						</div>
						<div className="grid grid-cols-1 gap-6">
							<Button
								variant="outline"
								type="button"
								onClick={() => signIn('google')}
							>
								<Icons.google className="mr-2 h-4 w-4" />
								Google
							</Button>
						</div>
					</CardContent>
					<CardFooter>
						<Button className="w-full" type="submit">
							Create account
						</Button>
					</CardFooter>
				</form>
			</Form>
		</Card>
	);
}
