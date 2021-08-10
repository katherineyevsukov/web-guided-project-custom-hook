import { useState } from "react";

// Custom hook to manage all state for a form with an arbitrary (n) number of inputs
const useForm = () => {
  const [firstName, setFirstName] = useState("");

  const handleChanges = e => {
    setFirstName(e.target.value);
  };

  const clearForm = e => {
    e.preventDefault();
    setFirstName("");
  };

  return [firstName, handleChanges, clearForm];
}

export default useForm;

// O(n) complexity: for n form inputs, n function calls
// O(1) complexity is what we want: for n form inputs, 1 function call!