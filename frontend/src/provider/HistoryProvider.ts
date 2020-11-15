import {IJob} from "../interfaces/IJob";
import {IJobHistory} from "../interfaces/IJobHistory";
import {searchableJobs} from "./JobProvider";

export function generateSearchResultDisplay(jobArray: IJob[]) {

  let historyResult: IJobHistory[] = addJobHistories(jobArray);
  fillHistoriesWithDates(jobArray, historyResult);

  return historyResult;
}

function addJobHistories(jobArray: IJob[]) {
  let targetHistoryArray: IJobHistory[] = [];

  searchableJobs.map((jobTitle) => {
    if (jobArray.find((item) => item.jobTitle === jobTitle)) {
      targetHistoryArray.push({
        "jobTitle": jobTitle,
        "history": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      })
    }
  })
  return targetHistoryArray;
}

function fillHistoriesWithDates(jobArray: IJob[], targetHistoryArray: IJobHistory[]) {

  let dayInMilliseconds: number = 24 * 60 * 60 * 1000;
  let today: number = Date.now();

  targetHistoryArray.map((jobHistory) => {
    jobArray
      .filter((job) => job.jobTitle === jobHistory.jobTitle)
      .map((job) => {
        let dayInHistory = Math.round((today - Date.parse(job.lastDate)) / dayInMilliseconds);
        jobHistory.history[dayInHistory]++;
      })
  })
}