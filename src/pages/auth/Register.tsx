import { useState } from "react"
import { useForm } from "@tanstack/react-form"
import { z } from "zod"
import { Input, Button } from "@nextui-org/react"

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
  country: z.string(),
  mobile: z.string().min(10),
  otp: z.string().optional(),
})

export default function Register() {
  const [otpSent, setOtpSent] =
    useState(false)

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      country: "",
      mobile: "",
      otp: "",
    },

    validators: {
      onSubmit: ({ value }) => {
        const result =
          schema.safeParse(value)

        if (!result.success) {
          return result.error
            .flatten()
            .fieldErrors
        }
      },
    },

    onSubmit: async ({ value }) => {
      console.log(
        "Form Data:",
        value
      )

      alert("Registered")
    },
  })

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "40px auto",
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
        Register
      </h2>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          form.handleSubmit()
        }}
      >
        <div style={{ marginBottom: "16px" }}>
          <form.Field name="name">
            {(field) => (
              <Input
                placeholder="Name"
                value={field.state.value}
                onChange={(e) =>
                  field.handleChange(
                    e.target.value
                  )
                }
              />
            )}
          </form.Field>
        </div>

        <div style={{ marginBottom: "16px" }}>
          <form.Field name="email">
            {(field) => (
              <Input
                placeholder="Email"
                value={field.state.value}
                onChange={(e) =>
                  field.handleChange(
                    e.target.value
                  )
                }
              />
            )}
          </form.Field>
        </div>

        <div style={{ marginBottom: "16px" }}>
          <form.Field name="password">
            {(field) => (
              <Input
                type="password"
                placeholder="Password"
                value={field.state.value}
                onChange={(e) =>
                  field.handleChange(
                    e.target.value
                  )
                }
              />
            )}
          </form.Field>
        </div>

        <div
          style={{
            marginBottom: "16px",
          }}
        >
          <form.Field name="country">
            {(field) => (
              <select
                value={
                  field.state.value
                }
                onChange={(e) =>
                  field.handleChange(
                    e.target.value
                  )
                }
                style={{
                  width: "100%",
                  padding: "12px",
                  border:
                    "1px solid #ccc",
                  borderRadius: "8px",
                }}
              >
                <option value="">
                  Select Country
                </option>

                <option value="India (+91)">
                  India (+91)
                </option>

                <option value="USA (+1)">
                  USA (+1)
                </option>
              </select>
            )}
          </form.Field>
        </div>

        <div style={{ marginBottom: "16px" }}>
          <form.Field name="mobile">
            {(field) => (
              <Input
                placeholder="Mobile"
                value={field.state.value}
                onChange={(e) =>
                  field.handleChange(
                    e.target.value
                  )
                }
              />
            )}
          </form.Field>
        </div>

        <button
          type="button"
          onClick={() =>
            setOtpSent(true)
          }
          style={{
            padding:
              "10px 16px",
            marginBottom:
              "18px",
            borderRadius:
              "6px",
            cursor:
              "pointer",
          }}
        >
          Send OTP
        </button>

        {otpSent && (
          <div
            style={{
              marginBottom:
                "18px",
            }}
          >
            <form.Field name="otp">
              {(field) => (
                <Input
                  placeholder="OTP"
                  value={
                    field.state.value
                  }
                  onChange={(e) =>
                    field.handleChange(
                      e.target.value
                    )
                  }
                />
              )}
            </form.Field>
          </div>
        )}

        <Button type="submit">
          Register
        </Button>
      </form>
    </div>
  )
}