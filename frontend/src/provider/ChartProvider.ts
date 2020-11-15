import {IJobHistory} from "../interfaces/IJobHistory";
import {defaultColors} from "./ColorProvider";

export function generateChart(displayData: IJobHistory[]) {
  let data = {
    labels: ["", "", "", "", "", "", "", "", "", "", "", "", "", "Heute"] as any,
    datasets: [] as any,
    lineTension: 0,
    responsive: true,
    legend: {
      position: "right"
    }
  }
  let counter = 0;

  displayData.map(jobHistory => {
    data.datasets.push(
      {
        label: jobHistory.jobTitle,
        data: jobHistory.history,
        borderColor: [
          defaultColors[counter]
        ],
        fill: false,
        borderWith: 10,
        lineTension: 0,
      }
    )
    counter++;
  })

  return data;

}

