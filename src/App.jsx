import React, { Suspense } from "react";
import Layout from "./Components/Layout";
import { Gameboy } from "./GameBoy";

export default function Home() {
  return (
    <Layout>
      <Suspense fallback="">
        <Gameboy />
      </Suspense>
    </Layout>
  );
}
