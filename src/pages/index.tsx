import { Layout } from "@/components/layouts";
import { EntriesList } from "@/components/ui";
import { EntriesContext } from "@/context/entries";
import { NextPage } from "next";
import { useContext } from "react";

const HomePage: NextPage = () => {
  const { entries } = useContext(EntriesContext);
  const styleContainer = {
    height: "calc(100vh - 120px)",
  };
  return (
    <Layout title="Home Jirarm">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div style={styleContainer} className=" bg-dark p-4 shadow rounded">
          <h3 className="text-2xl font-bold mb-2">Pendiente</h3>
          <EntriesList status="pending" entries={entries} />
        </div>
        <div style={styleContainer} className=" bg-dark p-4 shadow rounded">
          <h3 className="text-2xl font-bold mb-2">En progreso</h3>
          <EntriesList status="in-progress" entries={entries} />
        </div>
        <div style={styleContainer} className=" bg-dark p-4 shadow rounded">
          <h3 className="text-2xl font-bold mb-2">Terminada</h3>
          <EntriesList status="finished" entries={entries} />
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
