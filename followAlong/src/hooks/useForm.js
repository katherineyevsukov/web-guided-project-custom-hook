import { useState } from "react";

// Custom hook to manage all state for a form with an arbitrary number of inputs
const useForm = () => {
  const [firstName, setFirstName] = useState("");
  return [firstName, setFirstName];
}

export default useForm;