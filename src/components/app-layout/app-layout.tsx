import Head from "next/head";
import React from "react";
import NavBar from "../navigator";
interface Props {
  children: React.ReactNode;
  headTitle?: string;
}
export const AppLayout: React.FC<Props> = ({ children, headTitle }) => {
  return (
    <>
      <Head>
        <title>Furniture - {headTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative">
        <NavBar />
        <div className="w-full">{children}</div>
        <div className="w-full text-center">Classic Furniture ©2021</div>
      </div>
    </>
  );
};
