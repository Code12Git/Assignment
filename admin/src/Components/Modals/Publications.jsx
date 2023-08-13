import React, { useState, useRef } from "react";

const PublicationModal = ({ onCardCreate }) => {
  const [open, setOpen] = useState(false);
  const [username, setuserName] = useState(""); // State for name input
  const [userid, setUserid] = useState(""); // State for userid input
  const [password, setPassword] = useState(""); // State for password input

  const modalRef = useRef(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async () => {
    const newCard = {
      username: username,
      userid: userid,
      password: password,
    };
    onCardCreate(newCard);
    handleClose();
  };

  const handleOverlayClick = (e) => {
    if (modalRef.current && modalRef.current === e.target) {
      handleClose();
    }
  };

  return (
    <div className="mt-96 md:mt-0">
      <button onClick={handleOpen}>Create</button>
      {open && (
        <div
          className="fixed top-0 left-0 z-20 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
          onClick={handleOverlayClick}
          ref={modalRef}
        >
          <div className="bg-white w-96 py-24  px-72 rounded-lg border border-gray-300">
            <div className="m-auto flex flex-col items-center justify-center">
              <h2 className="text-gray-500 w-96 ml-60 text-2xl font-bold mb-4">
                Publication
              </h2>
              <div className="flex flex-col gap-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="rounded-3xl  indent-5 p-3 w-96 border border-gray-300"
                />

                <button className="p-3 font-bold w-52 hover:bg-blue-500 rounded-3xl m-auto bg-blue-400 text-white">
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PublicationModal;
