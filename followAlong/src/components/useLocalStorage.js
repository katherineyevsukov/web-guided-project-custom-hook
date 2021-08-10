// Enhance useState with the ability to persist values beyond the current session.
// If a user is filling out a form, for example, and accidentally closes the tab, they should be able to come back and pick up where they left off.

import { useState } from "react";

const useLocalStorage = (initialValue) => {
  // When initializing, check local storage for the value. If it's there, use it to initialize. Otherwise, use initialValue
  const [value, setValue] = useState(() => {
    if (localStorage.getItem('values')) {
      return localStorage.getItem('values');
    }
    else {
      return initialValue;
    }
  });

  // When updating state, also update local storage
  return [value, setValue];
}

export default useLocalStorage;