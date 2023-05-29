import React from "react";

interface IModalProps {
  visible: boolean;
  closeModal: () => void;
  error: String;
}

export const ModalError = ({ visible, closeModal, error }: IModalProps) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        visible ? "" : "hidden"
      }`}
    >
      <div className="bg-yellow-300 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Oops...</h2>
        <p className="text-gray-800">{error}</p>
        <div className="mt-4 flex justify-end">
          <button
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
