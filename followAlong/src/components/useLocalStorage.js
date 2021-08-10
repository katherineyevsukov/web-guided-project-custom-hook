// Enhance useState with the ability to persist values beyond the current session.
// If a user is filling out a form, for example, and accidentally closes the tab, they should be able to come back and pick up where they left off.

import { useState } from "react";

const useLocalStorage = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    return [value, setValue];
}

export default useLocalStorage;