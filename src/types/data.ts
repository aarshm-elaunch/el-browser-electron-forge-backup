export interface User {
  id: string;
  username: string;
  email: string;
  profileImage: string;
  role: "USER" | "ADMIN";
}

export interface HistoryEntry {
  _id: string;
  userId: string;
  url: string;
  title: string;
  description: string;
  favicon: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface HistoryData {
  message: string;
  data: HistoryEntry[];
  totalCount: number;
}

export interface GetAccountHistoryParams {
  page?: number;
  limit?: number;
  search?: string;
}