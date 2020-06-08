import React, { useState } from "react";

import View from "./ViewBlog";

function Dashboard() {
  const [Data] = useState([
    {
      time: "14.05.2020",
      title: "Garg Projects vs Leelavathi",
      location: "case",
    },
    {
      time: "15.05.2020",
      title: "Garg Projects vs Leelavathi",
      location: "case ",
    },
    
  ]);

  
  return (
   
        <div className="px-4 py-4 sm:px-0">
          <View title="task" typw="ttask" data={Data} />

        </div>
        );
}

export default Dashboard;
