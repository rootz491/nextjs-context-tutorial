"use client";

import React, { createContext, useEffect, useState } from 'react';

// Create the context
export const CountContext = createContext();

// Create the provider component
export const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const countString = localStorage.getItem('count');
    if (countString) {
      setCount(parseInt(countString));
    }
  }, []);

  const oveerideSetCount = (value) => {
    localStorage.setItem('count', value);
    setCount(value);
  }

  return (
    <CountContext.Provider value={{ count, setCount: oveerideSetCount }}>
      {children}
    </CountContext.Provider>
  );
};
