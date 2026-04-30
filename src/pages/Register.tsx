import { useForm } from '@tanstack/react-form'
import { z } from 'zod'
import { useState } from 'react'

const registerSchema = z.object({
  name: z.string().min(2, "Name required"),
  email: z.string().email(),
  password: z.string().min(6),
  country: z.string().min(1),
  mobile: z.string().min(10),
})

export default function Register() {
  const [otpSent, setOtpSent] = useState(false)

  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      country: '',
      mobile: '',
    },

    onSubmit: async ({ value }) => {
      const result = registerSchema.safeParse(value)

      if (!result.success) {
        alert(result.error.issues[0].message)
        return
      }

      alert("Registered Successfully")
    },
  })

  return (
    <div className="p-4">
      <h2>Register</h2>

      <form onSubmit={(e)=>{ e.preventDefault(); form.handleSubmit() }}>
        <input placeholder="Name"
          onChange={(e)=>form.setFieldValue('name', e.target.value)} />

        <input placeholder="Email"
          onChange={(e)=>form.setFieldValue('email', e.target.value)} />

        <input type="password" placeholder="Password"
          onChange={(e)=>form.setFieldValue('password', e.target.value)} />

        <select onChange={(e)=>form.setFieldValue('country', e.target.value)}>
          <option value="">Select Country</option>
          <option>India (+91)</option>
          <option>USA (+1)</option>
        </select>

        <input placeholder="Mobile"
          onChange={(e)=>form.setFieldValue('mobile', e.target.value)} />

        {!otpSent && (
          <button type="button" onClick={()=>setOtpSent(true)}>
            Send OTP
          </button>
        )}

        {otpSent && <input placeholder="Enter OTP" />}

        <button type="submit">Register</button>
      </form>
    </div>
  )
}