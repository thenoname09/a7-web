"use client";

import { createContext, useState } from "react";

export const TimelineContext = createContext();

const TimelineProvider  = ({ children }) => {
     const [fnds, setFnds] = useState([])

    const addEntry = (type, friendName) => {
    const entry = {
      id: Date.now(),
      type,
      title: `${type} with ${friendName}`,
      date: new Date().toISOString(),
    };
    setFnds((prev) => [entry, ...prev]);
     
  };
  const data = { fnds, addEntry }
    return (
         <TimelineContext.Provider value={data}>
      {children}
    </TimelineContext.Provider>
    );
};

export default TimelineProvider ;