export class Http {
  constructor(public readonly apiPrefix: string) {}

  /**
   * Makes an HTTP call to the given endpoint and returns the JSON response.
   *
   * @param uri
   * @param options
   * @private
   */
  private async fetch(uri: string, options: RequestInit = {}) {
    const trimmedUri = (uri.substr(0, 1) === '/' ? uri.substr(1) : uri).trim()
    const response = await fetch(`${this.apiPrefix}/${trimmedUri}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    })

    if (!response.ok) {
      throw new Error(response.statusText)
    }

    const json = await response.json()
    if (json.statusCode >= 400) {
      throw new Error(json.message)
    }

    return json
  }

  public async $get(uri: string, queries?: Record<string, any>) {
    const params = queries ? new URLSearchParams(queries) : undefined
    return this.fetch(params ? `${uri}?${params.toString()}` : uri)
  }

  public async $post(uri: string, payload?: any) {
    return this.fetch(uri, {
      method: 'POST',
      body: payload ? JSON.stringify(payload) : undefined,
    })
  }

  public async $put(uri: string, payload?: any) {
    return this.fetch(uri, {
      method: 'PUT',
      body: payload ? JSON.stringify(payload) : undefined,
    })
  }

  public async $patch(uri: string, payload?: any) {
    return this.fetch(uri, {
      method: 'PATCH',
      body: payload ? JSON.stringify(payload) : undefined,
    })
  }

  public async $delete(uri: string, payload?: any) {
    return this.fetch(uri, {
      method: 'DELETE',
      body: payload ? JSON.stringify(payload) : undefined,
    })
  }
}

export const http = new Http('/api/http')
