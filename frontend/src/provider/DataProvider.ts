import axios from "axios";
import {IJob} from "../interfaces/IJob";


export async function getJobs(zip: String, jobTitles: String[], radius: number): Promise<IJob> {
  let responseData: IJob = {} as IJob;
  const jobTitleParams: string = ""

  jobTitles.map(jobTitle => {
    jobTitleParams.concat("&title=" + jobTitle)
  })

  const requestUrl: string = "http://localhost/8080/search?zip=" + zip + "&radius=" + radius + jobTitleParams;

  try {
    await axios
      .get(requestUrl)
      .then((response) => {
        responseData = response.data;
      })
      .catch((error) => console.error(error));

  } catch (error) {
    console.error(error);
  }
  return responseData;
}