import './style.css';

function LoginForm({submitHandler, changeHandler, emailState, passwordState}) {
  return (
    <>
      <h3>Login Form</h3>
      
      <form className="login" onSubmit={submitHandler}>
        <div className="input-group flex-nowrap">
          <span className="input-group-text" id="addon-wrapping">email</span>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Email" 
            aria-label="Email" 
            name="email" 
            value={emailState}
            onChange={changeHandler}
            aria-describedby="addon-wrapping" />
        </div>
        <div className="input-group flex-nowrap">
          <span className="input-group-text" id="addon-wrapping">password</span>
          <input 
            type="password" 
            className="form-control" 
            placeholder="Password" 
            aria-label="Password" 
            name="password" 
            value={passwordState}
            onChange={changeHandler}
            aria-describedby="addon-wrapping" />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </>
  )
}

export default LoginForm;