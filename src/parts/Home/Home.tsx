import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Header } from "../Header";
import { Objectives } from "../Objectives";
import styles from "./Home.module.scss";

const Home = () => {
  useEffect(() => {
    toast.info("Site em desenvolvimento...", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
    });
  }, []);

  return (
    <div className={styles.container}>
      <ToastContainer />
      <Header />
      <Objectives />
    </div>
  );
};

export { Home };
