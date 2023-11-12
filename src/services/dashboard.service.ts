import { Axios, AxiosObservable } from "axios-observable";

import { API_URL } from "./../constants/api";
import { FetchServiceStatusResponse } from "./../interfaces/fetch-service-status-response.interface";

export class DashboardService {
  fetchHealthStatus(): AxiosObservable<FetchServiceStatusResponse> {
    return Axios.get<FetchServiceStatusResponse>(API_URL);
  }
}
