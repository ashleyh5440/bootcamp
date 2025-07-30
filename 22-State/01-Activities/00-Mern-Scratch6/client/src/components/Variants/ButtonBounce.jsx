export function ButtonBounce({remove, removeHandler}){
  return (
    <button onClick={removeHandler} type="submit" className={`animate__animated ${remove ? "animate__slideOutRight" : "animate__slideInLeft"}`}>
      Submit
    </button>
  )
}