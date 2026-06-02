import React from 'react'

export default function Register() {
  return (
    <>
      <section className="form-container">
        <form>
          <h2>Register Form</h2>
          <input type="text" placeholder="Enter username" />
          <input type="email" placeholder="Enter email address" />
          <input type="password" placeholder="Enter password" />
          <input type="submit" value="Log in" />
          <div className='terms'>
            <input type="checkbox" id='terms' />
            <label htmlFor='terms'>Terms & conditions applies</label>
          </div>
        </form>
      </section>
    </>
  )
}
