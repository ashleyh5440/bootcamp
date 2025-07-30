import { Profile } from './components/Profile'
import { UserProvider } from './utils/UserContext'

function App() {
  return (
    <>
      <h1>App</h1>
      <UserProvider>
        <Profile />
      </UserProvider>
    </>
  )
}

export default App
