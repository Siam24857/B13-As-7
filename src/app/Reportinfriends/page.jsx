'use client'

import { useContext } from "react";
import { AuthContext } from "@/app/context/AuthContext";
import Report from "./Report";

const Allreport = () => {
   const { who, tech } = useContext(AuthContext);
   console.log("this is", who, tech);
   
   return (
        <div className="bg-[#F8FAFC]">
            <div className="container mx-auto p-9">
                <h4 className="text-4xl font-bold">Timeline</h4>
                {
                    who.map((item, index) => <Report key={index} friend={item} tech={tech[index]} />)
                }
            </div>
        </div>
    );
};

export default Allreport;