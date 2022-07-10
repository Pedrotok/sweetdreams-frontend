import { useEffect, useState } from "react";

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(initialValue);

    useEffect(
        () => {
            try {
                const item = localStorage.getItem(key);
                setStoredValue(item ? JSON.parse(item) : initialValue);
            } catch (error) {
                console.log(error);
            }
        },
    []);
    
    const setValue = (value) => {
      try {
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        console.log(error);
      }
    };
    return [storedValue, setValue];
  }