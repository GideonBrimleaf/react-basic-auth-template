import React from 'react'

const UserProfile = (props) => {

  return (
    <main>
      <h1>This is the User Page</h1>
      <p>{props.profileText}</p>
    </main>
  )
}
export default UserProfile