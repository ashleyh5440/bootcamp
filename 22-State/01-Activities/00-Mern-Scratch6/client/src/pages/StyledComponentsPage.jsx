import { useState } from "react";
import { ButtonBounce } from "../components/Variants/ButtonBounce";
import { CloudButton } from "../components/Variants/CloudButton";

function StyledComponentsPage() {
  const [remove, setRemove] = useState(false);
  const [removed, setRemoved] = useState(false);
  const removeHandler = () => {
    setRemove(true)
    setTimeout(() => {
      setRemoved(true);
    }, 2000);
  }
  return (
    <>
      <h1>Styled Components Page</h1>
      {removed ? (
        <>
          Button Gone
        </>
      ) : (
        <ButtonBounce remove={remove} removeHandler={removeHandler}/>
      )}

      <CloudButton />
    </>
  )
}

export default StyledComponentsPage;