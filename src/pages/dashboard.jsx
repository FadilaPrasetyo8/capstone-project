import React from "react";
import { Navigasi } from "../component/dashboard/Navigasi";
import Content from "../component/dashboard/content";
import Content1 from "../component/dashboard/content1";
import CardArtikel from "../component/dashboard/cardArtikel";
import TentangKami from "../component/dashboard/tentangKami";

export default function Dashboard() {
  return (
    <div>
      <Navigasi />
      <Content />
      <Content1 />
      <CardArtikel />
      <TentangKami />
    </div>
  );
}
