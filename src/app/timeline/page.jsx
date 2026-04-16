import FndCheckInList from "@/components/FndCheckInList";

import React from "react";

const timelinePage = () => {
  return (
    <div className="  max-w-4xl items-center text-start px-3  my-13 mx-auto    ">
      <div>
        <h1 className="font-bold text-5xl text-[#1F2937]">Timeline</h1>

        <select defaultValue="Filter timeline"  className="select m-5">
          <option disabled={true}>Filter timeline</option>
          <option>call</option>
          <option>text</option>
          <option>video</option>
        </select>
      </div>

      <FndCheckInList></FndCheckInList>
    </div>
  );
};

export default timelinePage;
