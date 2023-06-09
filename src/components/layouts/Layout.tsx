import { FC, ReactNode } from "react";
import Head from "next/head";
import { Navbar } from "../ui";

interface Props {
  title: string;
  children: ReactNode;
}

export const Layout: FC<Props> = ({ title = "JirArm", children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <main className="p-5 bg-black">{children}</main>
    </>
  );
};
