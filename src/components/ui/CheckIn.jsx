"use client";
import { TimelineContext } from '@/context/timeline.context';
import { useContext } from 'react';
import { BsChatFill } from 'react-icons/bs';
import { FaPhone, FaVideo } from 'react-icons/fa';
import { toast } from 'react-toastify';

const CheckIn = ({friendName }) => {
    
  const { addEntry } = useContext(TimelineContext)

      const handleCheckIn = (type) => {
      addEntry(type, friendName);
      toast.success(`${type} with ${friendName} appointed`)
  };
    return (
       <div className='grid  sm:grid-cols-3 gap-4 pt-4 items-center justify-center '>
                <button onClick={() => handleCheckIn("Call", friendName )} className= "btn bg-[#F8FAFC] gap-2 py-4 w-full md:py-12 text-[#1F2937] "><FaPhone /> Call</button>
                <button onClick={() => handleCheckIn("Text", friendName)} className="btn bg-[#F8FAFC] gap-2 py-4 md:py-12 text-[#1F2937] "><BsChatFill /> Text</button>
                <button  onClick={() => handleCheckIn("Video", friendName)} className="btn bg-[#F8FAFC] gap-2 py-4 md:py-12 text-[#1F2937] "><FaVideo /> Video</button>
            </div>
    );
};

export default CheckIn;