'use client'

import React from 'react'

function Profile() {
  const [user, setUser] = React.useState<string>('')

  React.useEffect(() => {
    ;(async function () {
      const response = await fetch('http://localhost:3000/user', {
        credentials: 'include',
      })

      const data = await response.json()

      if (data?.user) {
        setUser(JSON.stringify(data?.user, null, 2))
      }

      console.log('User', data)
    })()
  }, [])

  return (
    <>
      <div>Profile</div>
      <code>
        <pre>Name {JSON.stringify(user) ?? ''}</pre>
      </code>
    </>
  )
}

export default Profile
