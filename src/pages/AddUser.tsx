import { useForm } from '@tanstack/react-form'

export default function AddUser() {
  const form = useForm({
    defaultValues: { name: '', email: '' },

    onSubmit: async ({ value }) => {
      alert("User Added: " + JSON.stringify(value))
    },
  })

  return (
    <div className="p-4">
      <h2>Add User</h2>

      <form onSubmit={(e)=>{ e.preventDefault(); form.handleSubmit() }}>
        <input placeholder="Name"
          onChange={(e)=>form.setFieldValue('name', e.target.value)} />

        <input placeholder="Email"
          onChange={(e)=>form.setFieldValue('email', e.target.value)} />

        <button type="submit">Add</button>
      </form>
    </div>
  )
}