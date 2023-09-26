'use client'

import React from 'react'

interface FormFields {
  email: string
  password: string
}

function Login() {
  function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault()

    const values: FormFields = {
      email: '',
      password: '',
    }

    const formData = new FormData(evt.currentTarget)

    for (const [key, value] of formData.entries()) {
      if (key in values) {
        values[key as keyof FormFields] = value as string
      }
    }

    try {
      fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
        credentials: 'include', // important
      })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          name="email"
          required
          type="email"
          className="border my-4"
          placeholder="Email"
        />
      </div>
      <div>
        <input
          name="password"
          required
          type="password"
          className="border my-4"
        />
      </div>
      <button>Submit</button>
    </form>
  )
}

export default Login
