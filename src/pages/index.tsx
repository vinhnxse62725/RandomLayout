import Head from "next/head";
import { AppLayout } from "../components/app-layout/app-layout";
import Section1 from "../components/landing-page/section-1";
export default function Home() {
  return (
    <AppLayout headTitle="Homepage">
      <div className="container">
        <Section1 />
      </div>
    </AppLayout>
  );
}
