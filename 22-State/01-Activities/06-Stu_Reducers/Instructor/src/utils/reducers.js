import createId from "./createId";

export default function reducer(state, action) {
  switch (action.type) {
    case 'ADD_STUDENT':
      const newStudent = {
        id: createId(state.students),
        ...action.payload[0]
      }

      return {
        ...state,
        students: [...state.students, newStudent]
      }
    case 'REMOVE_STUDENT':
      
      return {
        ...state,
        students: state.students.filter( student => student.id != action.payload)
      }
    default:
      return state;
  }
}
