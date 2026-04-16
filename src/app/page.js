import Banner from "@/components/homepage/Banner";
import Friends from "@/components/homepage/Friends";



export default function Home() {
  return (
    <div className=" bg-[#F8FAFC]  ">
      {/* "min-w-[80vh] */}
      <div className="mx-auto min-w-[80%]">
        <Banner></Banner>
        <Friends />
      </div>
      
    </div>
  );
}
