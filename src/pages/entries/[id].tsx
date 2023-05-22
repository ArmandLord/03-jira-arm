import { useState, ChangeEvent, FC, useContext } from "react";
import { GetServerSideProps } from "next";
import { Layout } from "@/components/layouts";
import { EntrieStatus, Entry } from "@/interfaces";
import { toast, Toaster } from "sonner";
// import { isValidObjectId } from "mongoose";
import { dbEntries } from "../../../database";
import { EntriesContext } from "@/context/entries";
import { useRouter } from "next/router";

const validStatus: EntrieStatus[] = ["pending", "in-progress", "finished"];

interface Props {
  entry: Entry;
}

const EntryPage: FC<Props> = ({ entry }) => {
  const { changesStatusById } = useContext(EntriesContext);
  const [inputValue, setInputValue] = useState(entry.description);
  const [statuss, setStatus] = useState<EntrieStatus>(entry.status);
  const router = useRouter();

  const onTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onStatusChanged = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);

    setStatus(event.target.value as EntrieStatus);
  };

  const onFormSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    if (inputValue.trim().length === 0) {
      toast.error("La entrada no puede estar vacia");
      return;
    }

    changesStatusById(entry._id, statuss, inputValue);
    toast.success("Entrada actualizada");
    // router.push("/"); despues de 1 segundo
    setTimeout(() => {
      router.push("/");
    }, 1000);
  };

  return (
    <Layout title="... ...">
      {/* card responsive centrada */}
      <Toaster position="top-right" richColors />
      <div className="card mt-5 mx-auto max-w-2xl bg-orange-50 rounded p-4">
        <div className="card-body">
          <h2 className="card-title text-neutral-800">
            Entrada: {inputValue.substring(0, 20)}...
          </h2>
          <p className="card-text text-neutral-800">
            Creada hace: {entry.createdAt} minutos
          </p>
          <br />
          <form className="flex flex-col">
            <input
              type="text"
              placeholder="Nueva entrada"
              className="p-2 rounded border border-gray-400 mt-2 text-gray-500"
              value={inputValue}
              onChange={onTextChange}
            />
            <p className="text-gray-800 mr-2">Estado:</p>
            <div className="flex">
              {
                // input raidio button
                validStatus.map((status) => (
                  <label
                    key={status}
                    className="inline-flex items-center mt-3 mr-4"
                  >
                    <input
                      type="radio"
                      className="form-radio text-gray-800"
                      name="status"
                      // defaultChecked={status === "pending"}
                      value={status}
                      checked={status === statuss}
                      onChange={onStatusChanged}
                    />
                    <span className="ml-2 text-gray-800">
                      {
                        // capitalize
                        status.charAt(0).toUpperCase() + status.slice(1)
                      }
                    </span>
                  </label>
                ))
              }
            </div>
            <button
              onClick={onFormSubmit}
              className="p-2 bg-gray-700 text-white rounded mt-2"
            >
              Guardar
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as { id: string };

  const entry = await dbEntries.dbEntriesById(id);

  if (!entry) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      entry,
    },
  };
};

export default EntryPage;
