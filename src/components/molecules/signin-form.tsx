'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useToast } from '@/hooks/use-toast'
import { signInSchema } from '@/libs/schema'

export const SignInForm = () => {
  const { toast } = useToast()

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  })

  const onSubmit = async (values: z.infer<typeof signInSchema>) => {
    try {
      const login = await signIn('credentials', {
        username: values.username,
        password: values.password,
        redirect: false,
      })
      if (!login?.error) {
        toast({
          title: 'Login successful',
          description: 'You have successfully logged in.',
        })
        window.location.href = '/'
      } else {
        toast({
          title: 'Login failed',
          description: 'There was an error logging in.',
          variant: 'destructive',
        })
      }
    } catch (error) {
      console.log(error)
      toast({
        title: 'Login failed',
        description: 'There was an error logging in.',
        variant: 'destructive',
      })
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="johndoe12" {...field} />
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
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="w-full">
          Sign in
        </Button>
      </form>
    </Form>
  )
}
