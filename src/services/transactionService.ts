import { api } from "./api";
import type { Transaction } from "../types/transaction";

export async function accumulateRequest(data: Transaction) {
  const response = await api.post("/transactions/accumulate", data);
  return response.data;
}

export async function redeemRequest(data: Transaction) {
  const response = await api.post("/transactions/redeem", data);
  return response.data;
}
