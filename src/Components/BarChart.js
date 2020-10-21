import React from "react";
import Chart from "react-google-charts";

const data = [
  ["Element", "Tickets Completed", { role: "style" }],
  ["Red Robot Systems", 5, "#E02C2C"], // RGB value
  ["Agile", 6, "#01285C"], // English color name
  ["Stratus", 3, "#488ECC"],
  ["TCS", 3, "color: #722B71"],
  ["Unity GTM", 7, "color: #000"],
  ["QNet", 3, "color: #EC7034"],
  ["Brunel", 4, "color: #722B71"] // CSS-style declaration
];

function BarChart() {
    return (
      <div className="completedTickets">
        <h1>Bar Chart</h1>
        <hr align="left"/>
        <div className="completedTicketsRow">
        <Chart
          chartType="ColumnChart"
          width="85%"
          height="400px"
          data={data}
        />
        </div>
      </div>
    );
}

export default BarChart