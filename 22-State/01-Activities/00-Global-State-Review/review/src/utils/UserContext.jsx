import { createContext, useContext, useReducer } from 'react';
import reducer from './reducer';

// Initialize new context for users
const UserContext = createContext();

// We create a custom hook to provide immediate usage of the student context value (students) in other components
export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    username: '',
    turtle: 'turtlevalue'
  });
  return (
    <UserContext.Provider
      value={{state, dispatch}}
    >
      {children}
    </UserContext.Provider>
  )
}
