import React from "react";
import { useSelector } from "react-redux";
import { IState } from "../interfaces/IStore";

export const ImageContainer = () => {
  const { image } = useSelector((state: IState) => state.image);

  return (
    <div className="p-5 rounded-md border-2 border-white h-full items-center justify-center flex">
      <img
        src={`data:image/svg+xml;base64,${btoa(image)}`}
        alt="Keanu"
        className="object-fill h-80 w-80"
      />
    </div>
  );
};
