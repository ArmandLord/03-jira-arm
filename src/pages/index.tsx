import { Layout } from "@/components/layouts";
import { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <Layout title="Home Jirarm">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
          style={{
            height: "calc(100vh - 120px)",
          }}
          className=" bg-dark p-4 shadow rounded"
        >
          <h3 className="text-2xl font-bold mb-2">Titulo</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatum.
          </p>
        </div>
        <div
          style={{
            height: "calc(100vh - 120px)",
          }}
          className=" bg-dark p-4 shadow rounded"
        >
          <h3 className="text-2xl font-bold mb-2">Titulo</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatum.
          </p>
        </div>
        <div
          style={{
            height: "calc(100vh - 120px)",
          }}
          className=" bg-dark p-4 shadow rounded"
        >
          <h3 className="text-2xl font-bold mb-2">Titulo</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatum.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
