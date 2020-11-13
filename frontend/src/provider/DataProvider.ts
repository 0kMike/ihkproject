import axios from "axios";
import {IJob} from "../interfaces/IJob";


export async function getJobs(zip: string, jobTitles: string[], radius: number): Promise<IJob[]> {
  let responseData: IJob[] = [] as IJob[];

  let requestUrl: string = "http://localhost:8080/search?zip=" + zip + "&radius=" + radius;

  jobTitles.map(item => {
     requestUrl = requestUrl.concat('&jobtitle=', item)
  })

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