import { useForm } from '@tanstack/react-form'
import { useParams } from '@tanstack/react-router'

export default function UpdateUser() {
  const { id } = useParams({ from: '/users/$id/update' })

  const form = useForm({
    defaultValues: { name: '', email: '' },

    onSubmit: async ({ value }) => {
      alert("Updated User " + id)
    },
  })

  return (
    <div className="p-4">
      <h2>Update User {id}</h2>

      <form onSubmit={(e)=>{ e.preventDefault(); form.handleSubmit() }}>
        <input placeholder="Name"
          onChange={(e)=>form.setFieldValue('name', e.target.value)} />

        <input placeholder="Email"
          onChange={(e)=>form.setFieldValue('email', e.target.value)} />

        <button type="submit">Update</button>
      </form>
    </div>
  )
}