import { useQuery } from "react-query";
import axios from "axios";

type Prediction = {
  main_temp: number[];
};

const fetchPrediction = async () => {
  const url = "https://6399388329930e2bb3cce530.mockapi.io/temprature/1";

  const response = await axios.get<Prediction>(url);
  return response.data;
};

export const UsePredictionData = () => {
  return useQuery("prediction", fetchPrediction);
};
