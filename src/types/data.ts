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
  description?: string;
  favicon: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface HistoryEntriesByDate {
  date: string;
  entries: HistoryEntry[];
}

export interface HistoryData {
  message: string;
  data: HistoryEntriesByDate[];
  totalCount: number;
  hasMoreData: boolean
}

export interface GetAccountHistoryParams {
  page?: number;
  limit?: number;
  search?: string;
  dateRange?: "this_week" | "last_week" | "this_month" | "custom" | string,
  start?: string,
  end?: string
}

export interface PostAccountHistoryParams {
  url: string;
  title?: string;
  description?: string;
  favicon?: string;
}

export type DateRangeOptions = "this_week" | "last_week" | "this_month" | "yesterday" | string;

export interface DateRange {
  start: Date;
  end: Date;
}