"use client";

import TimelineProvider from "@/context/timeline.context";



const Providers = ({ children }) => {
    return (
        <TimelineProvider>
             {children}
        </TimelineProvider>
    );
};

export default Providers;