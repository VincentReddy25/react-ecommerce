export default function Login() {
  return (
    <>
      <section className="form-container">
        <form>
          <h2>Login Form</h2>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <div className="show-password">
            <input type="checkbox" id="show" />
            <label htmlFor="show">show password</label>
          </div>
          <input type="submit" value="Log in" />
        </form>
      </section>
    </>
  )
}
