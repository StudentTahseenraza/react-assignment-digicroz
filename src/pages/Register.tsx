import { useForm } from '@tanstack/react-form'
import { useState } from 'react'
import InputField from '../components/common/InputField'
import Button from '../components/Button'

export default function Register() {
  const [otp, setOtp] = useState(false)

  const form = useForm({
    defaultValues: { name:'', email:'', password:'', country:'', mobile:'' },
    onSubmit: ({ value }) => alert(JSON.stringify(value)),
  })

  return (
    <form onSubmit={(e)=>{e.preventDefault(); form.handleSubmit()}}>
      <h2>Register</h2>

      <InputField placeholder="Name" onChange={(e:any)=>form.setFieldValue('name', e.target.value)} />
      <InputField placeholder="Email" onChange={(e:any)=>form.setFieldValue('email', e.target.value)} />
      <InputField type="password" placeholder="Password" onChange={(e:any)=>form.setFieldValue('password', e.target.value)} />

      <select onChange={(e)=>form.setFieldValue('country', e.target.value)}>
        <option value="">Select Country</option>
        <option>India (+91)</option>
        <option>USA (+1)</option>
      </select>

      <InputField placeholder="Mobile" onChange={(e:any)=>form.setFieldValue('mobile', e.target.value)} />

      {!otp && <Button text="Send OTP" onClick={()=>setOtp(true)} />}
      {otp && <InputField placeholder="Enter OTP" />}

      <Button text="Register" type="submit" />
    </form>
  )
}


// return (
//   <div className="flex items-center justify-center h-screen bg-gray-100">
//     <form
//       onSubmit={(e) => {
//         e.preventDefault()
//         form.handleSubmit()
//       }}
//       className="bg-white p-6 rounded shadow-md w-80"
//     >
//       <h2 className="text-xl font-bold mb-4 text-center">Register</h2>

//       <input className="w-full border p-2 mb-2 rounded" placeholder="Name"
//         onChange={(e)=>form.setFieldValue('name', e.target.value)} />

//       <input className="w-full border p-2 mb-2 rounded" placeholder="Email"
//         onChange={(e)=>form.setFieldValue('email', e.target.value)} />

//       <input type="password" className="w-full border p-2 mb-2 rounded" placeholder="Password"
//         onChange={(e)=>form.setFieldValue('password', e.target.value)} />

//       <select className="w-full border p-2 mb-2 rounded"
//         onChange={(e)=>form.setFieldValue('country', e.target.value)}>
//         <option value="">Select Country</option>
//         <option>India (+91)</option>
//         <option>USA (+1)</option>
//       </select>

//       <input className="w-full border p-2 mb-2 rounded" placeholder="Mobile"
//         onChange={(e)=>form.setFieldValue('mobile', e.target.value)} />

//       {!otpSent && (
//         <button
//           type="button"
//           onClick={()=>setOtpSent(true)}
//           className="w-full bg-gray-500 text-white p-2 rounded mb-2"
//         >
//           Send OTP
//         </button>
//       )}

//       {otpSent && (
//         <input className="w-full border p-2 mb-2 rounded" placeholder="Enter OTP" />
//       )}

//       <button
//         type="submit"
//         className="w-full bg-green-500 text-white p-2 rounded"
//       >
//         Register
//       </button>
//     </form>
//   </div>
// )