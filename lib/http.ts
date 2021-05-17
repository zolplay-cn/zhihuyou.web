import axios, { AxiosInstance } from 'axios'
import { ThunkErrorResponsePayload } from '~/types/redux'

export class Http {
  constructor(public readonly baseURL: string) {
    this.axios = axios.create({
      baseURL,
      withCredentials: true,
    })
  }

  private readonly axios: AxiosInstance

  private readonly request = async <T>(
    $req: () => Promise<T>
  ): Promise<T | ThunkErrorResponsePayload> => {
    try {
      return await $req()
    } catch (e) {
      return e.response.data as ThunkErrorResponsePayload
    }
  }

  public async $get<T>(uri: string, queries?: Record<string, string>) {
    return this.request<T>(() =>
      this.axios.get<unknown, T>(uri, {
        params: queries,
      })
    )
  }

  public async $post<T>(uri: string, data?: unknown) {
    return this.request<T>(() => this.axios.post<unknown, T>(uri, data))
  }

  public async $put<T>(uri: string, data?: unknown) {
    return this.request<T>(() => this.axios.put<unknown, T>(uri, data))
  }

  public async $patch<T>(uri: string, data?: unknown) {
    return this.request<T>(() => this.axios.patch<unknown, T>(uri, data))
  }

  public async $delete<T>(uri: string, data?: unknown) {
    return this.request<T>(() =>
      this.axios.delete<unknown, T>(uri, {
        data,
      })
    )
  }
}

export const http = new Http('/api')
