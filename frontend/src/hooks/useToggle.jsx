import React, { useCallback, useState } from "react";

const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const onChnageValue = useCallback(e => setValue(prev => !prev), []);

  return [value, onChnageValue, setValue];
};

export default useToggle;
