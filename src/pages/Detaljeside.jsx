// denne side er kodet af: Ellen Bager
import { useEffect, useState } from "react";
import DetaljesideHent from "../components/DetaljesideHent";
import VenstreBokse from "../components/VenstreBokse";



export default function Detaljeside() {



    return (
        <>
        <div className="pageContainer">
          <div className="pageFlex">
            <VenstreBokse />
            
            <DetaljesideHent />
            
          </div>
        </div>
      </>
    )
}