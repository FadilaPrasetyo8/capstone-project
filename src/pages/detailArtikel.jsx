import React from "react";
import { Navigasi } from "../component/dashboard/Navigasi";
import ContentImg from "../component/detailArtikel/contentImg";
import MainContent from "../component/detailArtikel/mainContent";

export default function DetailArtikel() {
  return (
    <div>
      <Navigasi />
      <ContentImg />

      <MainContent />
    </div>
  );
}
