import { useContext, useState } from "react";
import MainContext from "../MainContext";
import { GrLink, GrDownload, GrClose } from "react-icons/gr";

function Download() {
  const { selectedBrands, setSelectedBrands } = useContext(MainContext);

  return (
    <div className="download">
      
      <div className="actions">
        <a href="">
            <GrDownload/>
        </a>
        <button>
            <GrLink/>
        </button>
      </div>

      <div className="selected" onClick={() => setSelectedBrands([])}>
        <GrClose />
        {selectedBrands.length} brands collected
      </div>
    
    </div>
  );
}

export default Download;
