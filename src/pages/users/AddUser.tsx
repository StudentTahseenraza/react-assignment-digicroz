import { useForm } from "@tanstack/react-form"
import { z } from "zod"
import { Button, Input } from "@heroui/react"
import { useNavigate } from "@tanstack/react-router"

const userSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
})

export default function AddUser() {
  const navigate = useNavigate()

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
    },

    validators: {
      onSubmit: ({ value }) => {
        const result = userSchema.safeParse(value)

        if (!result.success) {
          return result.error.flatten().fieldErrors
        }
      },
    },

    onSubmit: async ({ value }) => {
      console.log(value)
      navigate({ to: "/users" })
    },
  })

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "40px auto",
        padding: "24px",
        border: "1px solid #ddd",
        borderRadius: "10px",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>
        Add User
      </h2>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          form.handleSubmit()
        }}
      >
        <form.Field name="name">
          {(field) => (
            <div style={{ marginBottom: "18px" }}>
              <Input
                placeholder="Name"
                value={field.state.value}
                onChange={(e) =>
                  field.handleChange(e.target.value)
                }
              />

              {field.state.meta.errors?.[0] && (
                <p
                  style={{
                    color: "red",
                    fontSize: "13px",
                    marginTop: "6px",
                  }}
                >
                  {String(field.state.meta.errors?.[0])}
                </p>
              )}
            </div>
          )}
        </form.Field>

        <form.Field name="email">
          {(field) => (
            <div style={{ marginBottom: "18px" }}>
              <Input
                placeholder="Email"
                value={field.state.value}
                onChange={(e) =>
                  field.handleChange(e.target.value)
                }
              />

              {field.state.meta.errors?.[0] && (
                <p
                  style={{
                    color: "red",
                    fontSize: "13px",
                    marginTop: "6px",
                  }}
                >
                  {String(field.state.meta.errors?.[0])}
                </p>
              )}
            </div>
          )}
        </form.Field>

        <Button type="submit">
          Add
        </Button>
      </form>
    </div>
  )
}