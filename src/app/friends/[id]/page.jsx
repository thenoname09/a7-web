import React from 'react';
import { FaPhone, FaVideo, FaTrash } from "react-icons/fa";
import { BsChatFill, BsArchiveFill } from "react-icons/bs";
import { MdAlarm, MdEdit } from "react-icons/md";
import Image from 'next/image';
import CheckIn from '@/components/ui/CheckIn';

const getStatusStyle = (status) => {
  if (status === "On-track") return "bg-[#244D3F] ";
  if (status === "Almost due") return "bg-[#EFAD44] ";
  if (status === "Overdue") return "bg-[#EF4444] ";
};

const FriendDetailPage = async ({ params }) => {

    const res = await fetch("https://a7-web.vercel.app/friends.json");
    const friends = await res.json();
    const { id } = await params;
    const friend = friends.find((f) => f.id === parseInt(id))
        console.log(friend, "friend")

 const { name, picture, status, tags, bio, email, days_since_contact, goal, next_due_date } = friend
        return (
        

        <div className="  py-10 px-4 bg-[#F8FAFC]">
          <div className=" container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 ">

        {/* left column */}
        <div className="lg:col-span-1">
          <div className="card bg-white shadow-lg p-6 flex flex-col items-center text-center gap-4">
            <Image src={picture} alt={name} width={120} height={120} className="rounded-full object-cover" />
            <h2 className="text-2xl font-bold">{name}</h2>
            <span className={`px-4 py-1 rounded-full text-sm font-semibold text-white ${getStatusStyle(status)}`}>
              {status}
            </span>
              <div className="flex flex-wrap justify-center gap-1 mb-3 mt-1">
          {tags.map((tag) => (
            <span key={tag} className=" font-medium badge  bg-emerald-100 text-emerald-900 text-xs p-3 rounded-full">
              {tag}
            </span>
          ))}
        
            <p className="text-gray-500 text-sm  "> &ldquo;{bio}&rdquo;</p>
            <p className="text-gray-400 text-sm">{email}</p>

           
    
        </div>

          </div>
           <div className="flex flex-col gap-2 w-full mt-2 ">
              <button className="btn bg-white shadow-lg  w-full"><MdAlarm /> Snooze 2 Weeks</button>
              <button className="btn bg-white shadow-lg btn-block w-full"><BsArchiveFill /> Archive</button>
              <button className="btn bg-white shadow-lg btn-soft btn-error w-full"><FaTrash /> Delete</button>
            </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-2 flex flex-col gap-6">

          {/* Stats */}
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="card bg-base-100 shadow-sm p-5 text-center">
              <p className="text-3xl font-bold text-[#244D3F]">{days_since_contact}</p>
              <p className="text-gray-500 text-sm mt-1">Days Since Contact</p>
            </div>
            <div className="card bg-base-100 shadow-sm p-5 text-center">
              <p className="text-3xl font-bold text-[#244D3F]">{goal}</p>
              <p className="text-gray-500 text-sm mt-1">Goal (days)</p>
            </div>
            <div className="card bg-base-100 shadow-sm p-5 text-center">
              <p className="text-2xl font-bold text-[#244D3F]">{next_due_date}</p>
              <p className="text-gray-500 text-sm mt-1">Next Due Date</p>
            </div>
          </div>

          {/* Relationship Goal */}
          <div className="card bg-base-100 shadow-lg p-6">
            <div className="flex justify-between items-center ">
                <div>
                    <h3 className='text-xl font-medium'>Relationship Goal</h3>
                   <p className=' mt-3 font-normal text-[#64748B text-lg '>Connect every <span className='font-semibold text-lg'>{goal} days</span></p>
                </div>
                <button className='btn'>Edit</button>
            </div>
          </div>

          {/* Quick Check-In */}
          <div className="card bg-base-100 shadow-lg p-6  ">
            <h3 className='font-medium text-xl text-[#244D3F]'>Quick Check-In</h3>
            <CheckIn friendName={name} />
          
          </div>

        </div>
      </div>
    </div>
    );
};

export default FriendDetailPage ;