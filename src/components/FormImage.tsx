import React, { FormEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchImageFailure, fetchImageRequest } from "../store/actions";

export const FormImage = () => {
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);
  const [options, setOptions] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchImageRequest(width, height, options));
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateValues()) {
      return dispatch(fetchImageFailure("Please verify your data"));
    }
    dispatch(fetchImageRequest(width, height, options));
  };

  const validateValues = () => {
    const regex = /^(yg|gy|y|g)$/;
    if (typeof width !== "number" || isNaN(width)) {
      return false;
    }
    if (typeof height !== "number" || isNaN(height)) {
      return false;
    }
    if (options.length > 0 && !regex.test(options)) {
      return false;
    }
    return true;
  };

  const handleOptions = (value: string) => {
    if (options.length === 0) {
      setOptions(value);
      return;
    }
    if (options.length > 0 && options.length < 2 && value !== options) {
      const newValue = value + options;
      setOptions(newValue);
      return;
    } else {
      const newValue = options.replace(value, "");
      setOptions(newValue);
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full">
        <label className="block text-start">Width:</label>
        <input
          className="w-full rounded-md px-2 py-1 border-2"
          type="number"
          value={width}
          min={0}
          onChange={(e) => setWidth(parseInt(e.target.value))}
        />
      </div>
      <br />
      <div className="w-full">
        <label className="block text-start">
          Height:
          <input
            className="w-full rounded-md px-2 py-1 border-2"
            type="number"
            value={height}
            min={0}
            onChange={(e) => setHeight(parseInt(e.target.value))}
          />
        </label>
      </div>
      <br />
      <div className="w-full flex space-x-2">
        <input
          id="y"
          type="checkbox"
          value={"y"}
          onChange={(e) => handleOptions(e.target.value)}
        />
        <label htmlFor="y">Young Keanu</label>
      </div>
      <br></br>
      <div className="w-full flex space-x-2">
        <input
          id="g"
          type="checkbox"
          value={"g"}
          onChange={(e) => handleOptions(e.target.value)}
        />
        <label htmlFor="g">Grayscale</label>
      </div>
      <br></br>
      <button
        className="btn bg-lime-700 px-4 py-2 w-full text-white rounded-md hover:bg-lime-600 hover:scale-105 transition-all ease-in-out duration-300"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};
