import { useState } from "react";
import { useUserContext } from "../../utils/UserContext";
import { LOGIN } from "../../utils/actions";

export function ProfileBox(props) {
  const {state, dispatch} = useUserContext();
  const [usernameInput, setUsernameInput] = useState('');
  const handleChange = (event) => {
    const value = event.target.value;
    setUsernameInput(value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    
    dispatch({type: LOGIN, payload: usernameInput});
    setUsernameInput('');
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          value={usernameInput}
          onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      <h3>Profile Box</h3>
      <h4>Username: {state.username} </h4>

      
    </>
  )
}