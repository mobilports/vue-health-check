import { ServiceStatusType } from "./../types/service-status";
import { ServiceStatusItem } from "./service-status-item.interface";

export interface FetchServiceStatusResponse {
  readonly services: Record<ServiceStatusType, ServiceStatusItem>;
}
