import { useState } from 'react';

export const formHook = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const resetForm = () => {
    setValue(initialValue);
  };

  return {
    value,
    setValue,
    reset: () => setValue(''),
    bind: {
      value,
      onChange: event => {
        console.log("value", event.target.value);
        setValue(event.target.value);
      }
    }
  };
};