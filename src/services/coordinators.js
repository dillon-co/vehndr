import { api } from "./api";

export async function getCoordinatorProfile(coordinatorId) {
  return api(`/api/coordinators/${coordinatorId}`);
}









