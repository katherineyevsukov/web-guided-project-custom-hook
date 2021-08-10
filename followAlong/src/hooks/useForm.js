import { useState } from "react";

// Custom hook to manage all state for a form with an arbitrary (n) number of inputs
const useForm = () => {

  const initialValues = {
    firstName: "",
    lastName: ""
  }
  // represent state as an object, which will allow us to easily handle all possibilities
  const [values, setValues] = useState(initialValues);

  const handleChanges = e => {
    // Change the value for the input in which the user typed
    setFirstName(e.target.value);
  };

  const clearForm = e => {
    e.preventDefault();
    setValues("");
  };

  return [values, handleChanges, clearForm];
}

export default useForm;

// O(n) complexity: for n form inputs, n function calls
// O(1) complexity is what we want: for n form inputs, 1 function call!