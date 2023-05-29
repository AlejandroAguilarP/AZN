import { takeLatest, call, put, StrictEffect } from "redux-saga/effects";
import {
  FETCH_IMAGE_REQUEST,
  fetchImageSuccess,
  fetchImageFailure,
} from "./actions";
import axios from "axios";

export interface IAction {
  type: string;
  payload: IPayload;
}
export interface IPayload {
  width: number;
  height: number;
  options: string;
}

interface ServerResponse {
  data: {
    data: {
      getKeanuImage: string;
    };
  };
  status: number;
  statusText: string;
}

function* fetchImageSaga(
  action: IAction
): Generator<StrictEffect, any, ServerResponse> {
  try {
    const { width, height, options } = action.payload;
    const url = process.env.REACT_APP_URL_ENV + `/getKeanuImage`;
    const data = {
      query: `query{getKeanuImage(height: ${height}, width: ${width}, options:"${options}" )}`,
    };
    const response: ServerResponse = yield call(axios.post, url, data);
    yield put(fetchImageSuccess(response.data.data.getKeanuImage));
  } catch (error: any) {
    yield put(fetchImageFailure("Some error occurred while fetching image"));
  }
}

export function* rootSaga() {
  yield takeLatest(FETCH_IMAGE_REQUEST, fetchImageSaga);
}
