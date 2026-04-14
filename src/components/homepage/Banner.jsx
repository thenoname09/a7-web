

const Banner = () => {
    return (
        <div className=" container   mx-auto flex items-center justify-center flex-col text-center py-14">
            <div className=" 
            ">
                <h1 className="font-bold text-5xl">Friends to keep close in your life</h1>
                <p className="text-lg pt-5 ">Your personal shelf of meaningful connections. Browse, tend, and nurture <br /> the relationships that matter most.</p>
                <div className="flex justify-center mt-12">
                    <button className=" p-4 rounded-xl  bg-emerald-800 text-white">Add a Friend</button>
                </div>
                   
            </div>
            
            
            {/* fnd count */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5 text-center mt-14">
                <div className="bg-white rounded p-8"> 
                    <p className="font-semibold text-3xl">3</p>
                    <p  className="text-lg">Total Number</p>
                </div > 
                <div className="bg-white rounded p-8 "> 
                    <p className="font-semibold text-3xl">3</p>
                    <p className="text-lg" >On Track</p>
                </div >
                <div className="bg-white  rounded p-8"> 
                    <p className="font-semibold text-3xl">3</p>
                    <p className="text-lg">Need Attention</p>
                </div> 
                <div className="bg-white rounded p-8"> 
                    <p className="font-semibold text-3xl">3</p>
                    <p className="text-lg">Interactions This Month</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;