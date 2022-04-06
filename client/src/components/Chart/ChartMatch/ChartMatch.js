import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";

import "./ChartMatch.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar, Doughnut, Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export default function ChartMatch(props) {
  // console.log(props);
  const dataId = props.dataId;
  const dataMatch = props.dataMatch;
  const dataStage = props.dataStage;

  const [titleText, setTitleText] = useState("No Match Selected");
  const [stagesLabels, setStagesLabels] = useState([]);
  const [minRoundsData, setMinRoundsData] = useState([]);
  const [maxPointsData, setMaxPointsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // filtrer le match clicker
      const matchToChart = dataMatch.filter((el) => {
        return el.id === dataId;
      });
      // console.log(matchToChart);
      const TitleMatch = matchToChart[0].matchname;
      setTitleText(TitleMatch);

      // filtrer les stages du match clicker
      const stageToChart = dataStage.filter((el) => {
        return el.MatchId === dataId;
      });
      // console.log(stageToChart);
      // map des stagename
      const stagesName = stageToChart.map((stage) => {
        return stage.stageName;
      });
      setStagesLabels(stagesName);
      // console.log(stagesName);

      // map des minRounds
      const minRounds = stageToChart.map((stage) => {
        return stage.minRounds;
      });
      setMinRoundsData(minRounds);
      // map des maxPoints
      const maxPoints = stageToChart.map((stage) => {
        return stage.maxPoints;
      });
      setMaxPointsData(maxPoints);
    };

    fetchData();
  }, [dataMatch, dataId]);

  const labels = stagesLabels;
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: titleText,
        color: "#17a2b8",
        family: "Audiowide",
        font: {
          size: 24,
        },
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Minimum Rounds",
        data: minRoundsData,
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
      {
        label: "Maximum Points",
        data: maxPointsData,
        fill: false,
        backgroundColor: "#ff006180",
        borderColor: "#ff0061",
      },
    ],
  };

  const [chartType, setChartType] = useState("");

  const handleChangeTypeChart = (e) => {
    setChartType(e.target.value);
    // console.log(chartType);
  };

  return (
    <div className="ChartMatch col col-lg-4 col-md-6 col-sm-12">
      <p>{props.matchId}</p>
      <div className="chart-select">
        <select
          className="form-select form-select-sm select-chart"
          aria-label=".form-select-sm example"
          name="type"
          value="type"
          onChange={handleChangeTypeChart}
        >
          <option value="Bar">Select Chart type</option>
          <option value="Line">line</option>
          <option value="Pie">Pie</option>
          <option value="Bar">Bar</option>
          <option value="Doughnut">Doughnut</option>
        </select>
      </div>
      {(() => {
        if (chartType === "Bar") {
          return <Bar options={options} data={data} />;
        } else if (chartType === "Line") {
          return <Line options={options} data={data} />;
        } else if (chartType === "Doughnut") {
          return <Doughnut options={options} data={data} />;
        } else if (chartType === "Pie") {
          return <Pie options={options} data={data} />;
        } else {
          return <Bar options={options} data={data} />;
        }
      })()}
    </div>
  );
}
