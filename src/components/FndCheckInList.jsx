"use client";

import { TimelineContext } from "@/context/timeline.context";
import { useContext } from "react";
import CallImg from "@/assets/call.png";
import TextImg from "@/assets/text.png";
import VideoImg from "@/assets/video.png";
import Image from "next/image";

const iconMap = {
  Call: CallImg,
  Text: TextImg,
  Video: VideoImg,
};



const FndCheckInList = () => {
  const { fnds } = useContext(TimelineContext);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-0   mx-auto">
      <div className="space-y-4">

         {fnds.length === 0 ? (
        <div className="w-full flex flex-col items-center justify-center bg-white p-15 rounded-xl shadow-sm ">
          <p className="text-gray-500 text-lg">No activity yet</p>
        </div>
      ) : (
        fnds.map((item) => (
          <div
            key={item.id}
            className="flex  items-center gap-4 w-full justify-left p-5 bg-white  rounded-xl shadow-lg"
          >
            <div>
              <Image
                src={iconMap[item.type]}
                alt={item.type}
                width={22}
                height={22}
              />
            </div>

            <div>
              <p className="font-medium text-gray-800">{item.title}</p>
              <p className="text-sm text-gray-500">
                {new Date(item.date).toLocaleString()}
              </p>
            </div>
          </div>
        )))}
      </div>
    </div>
  );
};

export default FndCheckInList;