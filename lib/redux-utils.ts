import { ThunkErrorResponsePayload } from '~/types/redux'
import { BaseThunkAPI } from '@reduxjs/toolkit/src/createAsyncThunk'

export function makePayloadCreator<Returned, Args>(
  apiCall: (args: Args) => Promise<Returned | ThunkErrorResponsePayload>
): (args: Args, thunkApi: BaseThunkAPI<any, any, any, any>) => any {
  return async (args, { rejectWithValue }) => {
    const result = await apiCall(args)

    const { error } = result as ThunkErrorResponsePayload
    if (error) {
      return rejectWithValue(result as ThunkErrorResponsePayload)
    }

    return result
  }
}
