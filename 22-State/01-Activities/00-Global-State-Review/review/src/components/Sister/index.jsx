import { useUserContext } from "../../utils/UserContext"

export function Sister (props) {
  const {state, dispatch } = useUserContext();
  return (
    <>
      Sister's Username: {state.turtle}
    </>
  )
}