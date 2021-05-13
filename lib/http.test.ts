import { Http } from '~/lib/http'
import fetchMock from 'jest-fetch-mock'

fetchMock.enableMocks()

const prefix = 'http://0.0.0.0/api/proxy'
const http = new Http(prefix)

describe('Http', () => {
  beforeEach(() => {
    fetchMock.resetMocks()
  })

  it('should make a GET request to the correct URL', async () => {
    fetchMock.mockResponseOnce(JSON.stringify([]))

    const result = await http.$get('endpoint')
    expect(fetchMock.mock.calls[0][0]).toEqual(prefix + '/endpoint')
    expect(result).toMatchObject([])
  })

  it('should make a GET request with queries correctly', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ test: 'data' }))

    const result = await http.$get('users', { q: 'b', data: 1, search: true })
    expect(fetchMock.mock.calls[0][0]).toEqual(prefix + '/users?q=b&data=1&search=true')
    expect(result).toMatchObject({ test: 'data' })
  })

  it('should make a POST request with data correctly', async () => {
    fetchMock.mockResponseOnce(async (request) =>
      request.method.toLowerCase() === 'post' ? JSON.stringify({ test: 'data' }) : '{}'
    )

    const result = await http.$post('posts', {
      dataA: 'cool',
      dataB: false,
    })
    expect(fetchMock.mock.calls[0][0]).toEqual(prefix + '/posts')
    expect(result).toMatchObject({ test: 'data' })
  })

  it('should make a PUT request with data correctly', async () => {
    fetchMock.mockResponseOnce(async (request) =>
      request.method.toLowerCase() === 'put' ? JSON.stringify({ test: 'data' }) : '{}'
    )

    const result = await http.$put('posts', {
      dataA: 'cool',
      dataB: false,
    })
    expect(fetchMock.mock.calls[0][0]).toEqual(prefix + '/posts')
    expect(result).toMatchObject({ test: 'data' })
  })

  it('should make a PATCH request with data correctly', async () => {
    fetchMock.mockResponseOnce(async (request) =>
      request.method.toLowerCase() === 'patch' ? JSON.stringify({ test: 'data' }) : '{}'
    )

    const result = await http.$patch('posts', {
      dataA: 'cool',
      dataB: false,
    })
    expect(fetchMock.mock.calls[0][0]).toEqual(prefix + '/posts')
    expect(result).toMatchObject({ test: 'data' })
  })

  it('should make a DELETE request with data correctly', async () => {
    fetchMock.mockResponseOnce(async (request) =>
      request.method.toLowerCase() === 'delete' ? JSON.stringify({ test: 'data' }) : '{}'
    )

    const result = await http.$delete('posts', {
      dataA: 'cool',
      dataB: false,
    })
    expect(fetchMock.mock.calls[0][0]).toEqual(prefix + '/posts')
    expect(result).toMatchObject({ test: 'data' })
  })
})
