import React from "react";
import Chart from "chart.js";

export default function CardLineChart({ baselineData, interventionData }) {
  React.useEffect(() => {
    var config = {
      type: "line",
      data: {
        labels: [
          "2016",
          "2017",
          "2018",
          "2019",
          "2020",
          "2021",
          "2022",
          "2023",
          "2024",
          "2025",
        ],
        datasets: [
          {
            label: 'Without Interventions',
            backgroundColor: "#3182ce",
            borderColor: "#3182ce",
            // data: [65, 74, 66, 64, 56, 67, 73, 80, 85, 88],
            data: baselineData,
            fill: false,
          },
          {
            label: 'Interventions Implemented',
            fill: false,
            backgroundColor: "#edf2f7",
            borderColor: "#edf2f7",
            // data: [63, 72, 69, 65, 56, 60, 65, 62, 58, 64],
            data: interventionData,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Sales Charts",
          fontColor: "white",
        },
        legend: {
          labels: {
            fontColor: "white",
          },
          align: "end",
          position: "bottom",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: "rgba(255,255,255,.7)",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Month",
                fontColor: "white",
              },
              gridLines: {
                display: false,
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(0, 0, 0, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontColor: "rgba(255,255,255,.7)",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
                fontColor: "white",
              },
              gridLines: {
                borderDash: [3],
                borderDashOffset: [3],
                drawBorder: false,
                color: "rgba(255, 255, 255, 0.15)",
                zeroLineColor: "rgba(33, 37, 41, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    var ctx = document.getElementById("line-chart").getContext("2d");
    window.myLine = new Chart(ctx, config);
  }, []);
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded bg-blueGray-700">
        <div className="flex-auto">
          {/* Chart */}
          <div className="relative">
            <canvas id="line-chart" className="h-[30rem]"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}