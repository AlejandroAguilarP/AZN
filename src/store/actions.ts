export const FETCH_IMAGE_REQUEST = "FETCH_IMAGE_REQUEST";
export const FETCH_IMAGE_SUCCESS = "FETCH_IMAGE_SUCCESS";
export const FETCH_IMAGE_FAILURE = "FETCH_IMAGE_FAILURE";
export const CLEAR_ERROR = "CLEAR_ERROR";

export const fetchImageRequest = (
  width: number,
  height: number,
  options: string
) => ({
  type: FETCH_IMAGE_REQUEST,
  payload: { width, height, options },
});

export const fetchImageSuccess = (image: any) => ({
  type: FETCH_IMAGE_SUCCESS,
  payload: image,
});

export const fetchImageFailure = (error: any) => ({
  type: FETCH_IMAGE_FAILURE,
  payload: error,
});
export const clearError = () => ({
  type: CLEAR_ERROR,
});
