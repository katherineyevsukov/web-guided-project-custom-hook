// Enhance useState with the ability to persist values beyond the current session.
// If a user is filling out a form, for example, and accidentally closes the tab, they should be able to come back and pick up where they left off.

import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  // When initializing, check local storage for the value. If it's there, use it to initialize. Otherwise, use initialValue
  const [value, setValue] = useState(() => {
    if (localStorage.getItem(key)) {
      return localStorage.getItem(key);
    }
    else {
      return initialValue;
    }
  });

  // When updating state, also update local storage
  // Do this by "composing" setValue into a new function that sets the value and local storage
  const setValueAndLocalStorage = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, newValue);
  }

  return [value, setValueAndLocalStorage];
}

export default useLocalStorage;