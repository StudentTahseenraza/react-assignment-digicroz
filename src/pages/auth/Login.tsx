import { useForm } from "@tanstack/react-form"
import { z } from "zod"
import { Input, Button } from "@nextui-org/react"
import { useNavigate } from "@tanstack/react-router"

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

export default function Login() {
  const navigate = useNavigate()

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },

    validators: {
      onSubmit: ({ value }) => {
        const result = schema.safeParse(value)

        if (!result.success) {
          return result.error.flatten().fieldErrors
        }

        return undefined
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
        maxWidth: "450px",
        margin: "50px auto",
        padding: "28px",
        border: "1px solid #ddd",
        borderRadius: "10px",
      }}
    >
      <h2
        style={{
          marginBottom: "24px",
          textAlign: "center",
        }}
      >
        Login
      </h2>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          form.handleSubmit()
        }}
      >
        <form.Field name="email">
          {(field) => (
            <div style={{ marginBottom: "18px" }}>
              <Input
                label="Email"
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
                  {String(field.state.meta.errors[0])}
                </p>
              )}
            </div>
          )}
        </form.Field>

        <form.Field name="password">
          {(field) => (
            <div style={{ marginBottom: "22px" }}>
              <Input
                type="password"
                label="Password"
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
                  {String(field.state.meta.errors[0])}
                </p>
              )}
            </div>
          )}
        </form.Field>

        <Button type="submit">
          Login
        </Button>
      </form>
    </div>
  )
}