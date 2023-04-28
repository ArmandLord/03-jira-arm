import { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaRegSave } from "react-icons/fa";

export const CreateNewEntry = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      {isOpen ? (
        <form className="flex flex-col mb-2">
          <input
            className="shadow appearance-none border rounded py-2 mb-2 px-3 text-background-three leading-tight focus:outline-none focus:shadow-outline"
            id="entry"
            type="text"
            placeholder="Nueva entrada"
          />
          <div className="flex justify-between">
            <button
              className="font-bold py-2 text-background-three hover:text-primary focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              Cancelar
            </button>
            <button
              className="flex items-center border text-background-three border-background-three hover:border-background-five hover:text-background-five-ligth font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              Guardar
              <FaRegSave className="ml-2" />
            </button>
          </div>
        </form>
      ) : (
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="mb-2 flex items-center justify-center text-background-three border w-full border-background-three text-sm font-bold py-2 px-4 rounded hover:border-background-five hover:text-background-five-ligth focus:outline-none focus:shadow-outline"
        >
          <IoMdAddCircleOutline />
          AGREGA TAREA
        </button>
      )}
    </>
  );
};
