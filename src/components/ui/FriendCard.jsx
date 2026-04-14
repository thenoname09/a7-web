import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const getStatusStyle = (status) => {
  if (status === "On-track") {
    return "bg-[#244D3F]";
  }  if (status === "Almost due") {
    return "bg-[#EFAD44]";
  } if (status === "Overdue") 
   { return "bg-[#EF4444]";}

  }


const FriendCard = ({ friend }) => {
    const {name,picture, days_since_contact,status ,tags} = friend
    return (
           <Link href={`/${friend.id}`} className="card bg-base-100 w-full h-full shadow-sm p-2 pt-5 ">
      <figure className="">
        <Image src={picture} alt={name} height={80} width={80} className="object-cover rounded-full " />
      </figure>
      <div className="card-body text-center items-center flex flex-col grow">
        <h2 className="card-title ">{friend.name}</h2>
        
       
        <div className="flex flex-wrap justify-center gap-1 mb-3 mt-2">
          {tags.map((tag) => (
            <span key={tag} className=" font-medium badge bg-emerald-100 text-emerald-900 text-xs p-4 rounded-full">
              {tag}
            </span>
          ))}
    
        </div>
          <p className={` mt-auto font-medium items-center text-center  text-white text-sm px-4 py-1 rounded-full ${getStatusStyle(status)}`} >{status}</p>
         
      </div>
    </Link>
    )
};

export default FriendCard;