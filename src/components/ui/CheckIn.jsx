"use client";
import { TimelineContext } from '@/context/timeline.context';
import { useContext } from 'react';
import { BsChatFill } from 'react-icons/bs';
import { FaPhone, FaVideo } from 'react-icons/fa';

const CheckIn = ({friendName }) => {
    
  const { addEntry } = useContext(TimelineContext)
    return (
       <div className='grid  sm:grid-cols-3 gap-4 pt-4 items-center justify-center '>
                <button onClick={() => addEntry("Call", friendName )} className= "btn bg-[#F8FAFC] gap-2 py-4 w-full md:py-12 text-[#1F2937] "><FaPhone /> Call</button>
                <button onClick={() => addEntry("Text", friendName)} className="btn bg-[#F8FAFC] gap-2 py-4 md:py-12 text-[#1F2937] "><BsChatFill /> Text</button>
                <button  onClick={() => addEntry("Video", friendName)} className="btn bg-[#F8FAFC] gap-2 py-4 md:py-12 text-[#1F2937] "><FaVideo /> Video</button>
            </div>
    );
};

export default CheckIn;