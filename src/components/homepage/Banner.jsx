

const Banner = () => {
    return (
        <div className=" w-full max-w-5xl mx-auto flex items-center justify-center flex-col text-center py-14">
            <div className=" 
            ">
                <h1 className="font-bold text-xl sm:text-2xl md:text-4xl lg:text-5xl">Friends to keep close in your life</h1>
                <p className="text-sm sm:text-base md:text-lg  pt-5 ">Your personal shelf of meaningful connections.  Browse, tend, and nurture  <br />the relationships that matter most.</p>
                <div className="flex justify-center mt-12">
                    <button className=" p-3 rounded-xl btn bg-emerald-800 text-white">Add a Friend</button>
                </div>
                   
            </div>
            
            
            
            <div className="grid  sm:grid-cols-2 md:grid-cols-4 gap-4 mt-10 sm:mt-14 w-full">
                <div className="bg-white rounded p-8 shadow-sm "> 
                    <p className="font-semibold text-3xl">8</p>
                    <p  className="text-lg">Total Number</p>
                </div > 
                <div className="bg-white rounded p-8 shadow-sm "> 
                    <p className="font-semibold text-3xl">3</p>
                    <p className="text-lg" >On Track</p>
                </div >
                <div className="bg-white  rounded p-8 shadow-sm"> 
                    <p className="font-semibold text-3xl">3</p>
                    <p className="text-lg">Almost due</p>
                </div> 
                <div className="bg-white rounded p-8 shadow-sm"> 
                    <p className="font-semibold text-3xl">2</p>
                    <p className="text-lg">Overdue</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;