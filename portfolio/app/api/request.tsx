import axios, { AxiosResponse } from "axios";

async function request<T>(
  method: string,
  url: string,
  data: any = {},
  headers: Record<string, string> = {}
): Promise<AxiosResponse<T>> {
  const config = {
    method: method,
    url: url,
    headers: headers,
    data: data,
  };

  return axios.request<T>(config);
}

export async function get<T>(url: string, headers = {}): Promise<AxiosResponse<T>> {
  return request<T>("GET", url, {}, headers);
}

export async function post<T>(url: string, data: any, headers = {}): Promise<AxiosResponse<T>> {
  return request<T>("POST", url, data, headers);
}

export async function del<T>(url: string, headers = {}): Promise<AxiosResponse<T>> {
  return request<T>("DELETE", url, {}, headers);
}

export const isErrorWithResponse = (
  err: unknown,
): err is { response: { data: { message: string } } } => {
  return typeof err === "object" && err !== null && "response" in err;
};
