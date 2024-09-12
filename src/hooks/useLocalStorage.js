import { useState } from 'react';

const useLocalStorage = () => {
  const [itemValue, setItemValue] = useState(null);

  const setItem = (key, value) => {
    localStorage.setItem(key, value);
    setItemValue(value);
  };

  const getItem = (key) => {
    const value = localStorage.getItem(key);
    setItemValue(value);
    return value;
  };

  const removeItem = (key) => {
    localStorage.removeItem(key);
    setItemValue(null);
  };

  return { itemValue, setItem, getItem, removeItem };
};

export default useLocalStorage;
