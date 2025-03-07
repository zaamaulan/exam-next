import { SignInForm } from '../molecules/signin-form'

export const SignIn = () => {
  return (
    <div className="w-[400px] space-y-6">
      <div className="space-y-1.5">
        <h1 className="text-xl font-semibold">Welcome back!</h1>
        <p className="max-w-md text-sm text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quia voluptates magni.
        </p>
      </div>
      <SignInForm />
    </div>
  )
}
