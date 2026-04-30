import { useForm } from '@tanstack/react-form'
import { z } from 'zod'

const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Min 6 characters"),
})

export default function Login() {
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },

    onSubmit: async ({ value }) => {
      const result = loginSchema.safeParse(value)

      if (!result.success) {
        alert(result.error.issues[0].message)
        return
      }

      alert("Login Successful")
    },
  })

  return (
    <div className="p-4">
      <h2>Login</h2>

      <form onSubmit={(e) => { e.preventDefault(); form.handleSubmit() }}>
        <input
          placeholder="Email"
          value={form.state.values.email}
          onChange={(e)=>form.setFieldValue('email', e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={form.state.values.password}
          onChange={(e)=>form.setFieldValue('password', e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  )
}