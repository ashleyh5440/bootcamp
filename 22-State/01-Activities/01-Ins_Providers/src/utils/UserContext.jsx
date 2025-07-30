import { createContext, useState } from 'react';

export const UserContext = createContext(); 
// use to create the hook for the consumer
// used to creat the provider component as well

const UserProvider = (props) => {
  const [currentUser, setCurrentUser] = useState({
    name: 'John',
    role: 'Admin',
    id: 142323,
  });

  return (
    <UserContext.Provider value={{ currentUser: currentUser }} {...props} />
  );
};

export default UserProvider; // component for the provider, used inside App for global state
