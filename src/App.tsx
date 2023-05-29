import React from "react";
import "./App.css";
import { FormImage } from "./components/FormImage";
import { Loader } from "./components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "./interfaces/IStore";
import { ImageContainer } from "./components/ImageContainer";
import { ModalError } from "./components/ModalError";
import { clearError } from "./store/actions";

function App() {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state: IState) => state.image);

  const closeModal = () => {
    dispatch(clearError());
  };
  return (
    <div className="App">
      <div className="max-w-3xl md:p-0 p-5 mx-auto flex items-center min-h-screen flex-col justify-center">
        <div className="w-12/12 my-5">
          <h1 className="font-bold text-2xl">Get Keanu Image</h1>
        </div>
        {isLoading && <Loader />}
        {error && (
          <ModalError visible={!!error} error={error} closeModal={closeModal} />
        )}
        <div className="flex flex-col md:flex-row items-stretch justify-around md:space-x-10 md:space-y-0 space-y-10 w-full">
          <div className="w-full md:w-1/2 flex-1">
            <div className="p-5 rounded-md border-2 border-white h-full">
              <FormImage />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex-1">
            <ImageContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
