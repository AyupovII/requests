import { Route, Routes, useLocation } from "react-router-dom";

import { Requests } from "../pages/requests";
import { Main } from "../widgets/main";

import styles from "./styles.module.scss";
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import { NewRequest } from "@/pages/new-request";
import { IdRequest } from "@/pages/id-request";
import { useEffect } from "react";
import { requestStore } from "@/entities/request/store";
import { Breadcrumbs } from "@/widgets/breadcrumbs";

function App() {
  const location = useLocation();

  useEffect(() => {
    requestStore.loadRequests();
  }, []);
  return (
    <div className={styles.app}>
      <Header link={location.pathname} />
      <Breadcrumbs/>
      <Main>
        <Routes>
          <Route path="/" element={<Requests />} />
          <Route path="/requests" element={<Requests />} />
          <Route path="/requests/new" element={<NewRequest />} />
          <Route path="/requests/:id" element={<IdRequest />} />
        </Routes>
      </Main>
      <Footer/>
    </div>
  );
}

export default App;
