"use client";
import { Legend, Pie, PieChart, Tooltip } from "recharts";


const StatsPage = () => {
    return (
        <div className="max-w-4xl items-center mx-auto py-8">
            <h1 className=" font-bold text-5xl" >Friendship Analytics</h1>

            {/* <div>
                 <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={isAnimationActive}
      />
       <Legend />
        <Tooltip />
    </PieChart>


            </div> */}



        </div>

        
    );
};

export default StatsPage ;