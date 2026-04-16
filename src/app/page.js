import Banner from "@/components/homepage/Banner";
import Friends from "@/components/homepage/Friends";



export default function Home() {
  return (
    <div className=" bg-[#F8FAFC]  ">
      <div className="min-w-[80vh] mx-auto">
        <Banner></Banner>
        <Friends />
      </div>
      
    </div>
  );
}
