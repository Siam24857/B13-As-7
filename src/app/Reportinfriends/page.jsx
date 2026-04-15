'use client'

import { useContext, useState } from "react";
import { AuthContext } from "@/app/context/AuthContext";
import Report from "./Report";

const Allreport = () => {
   const { who, tech } = useContext(AuthContext);
   const [filter, setFilter] = useState("all");
   
   console.log("who array:", who);
   console.log("tech array:", tech);
   
    
   const getFilteredData = () => {
     const result = [];
     
     for(let i = 0; i < who.length; i++) {
       if(filter === "all") {
         result.push({ friend: who[i], techType: tech[i] });
       } else if(tech[i] === filter) {
         result.push({ friend: who[i], techType: tech[i] });
       }
     }
     
     return result;
   }
   
   const filteredData = getFilteredData();
   
   return (
        <div className="bg-[#F8FAFC]">
            <div className="container mx-auto p-9">
                <h4 className="text-4xl font-bold">Timeline</h4>
                
                <select 
                  value={filter} 
                  onChange={(e) => setFilter(e.target.value)}
                  className="my-4 p-2 border rounded"
                >
                  <option value="all">Filter timeline</option>
                  <option value="call">Call</option>
                  <option value="text">Text</option>
                  <option value="video">Video</option>
                </select>

                <div>
                  {filteredData.length === 0 && (
                    <p className="text-gray-500 text-center text-2xl">Not Foubnd</p>
                  )}
                  {filteredData.map((item, index) => (
                    <Report key={index} friend={item.friend} tech={item.techType} />
                  ))}
                </div>
            </div>
        </div>
    );
};

export default Allreport;