import { useState } from "react";

// Custom hook to manage all state for a form with an arbitrary number of inputs
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