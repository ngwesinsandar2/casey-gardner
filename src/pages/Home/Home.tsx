import Nav from "../../components/Nav/Nav";
import Content from "./ContentBody/Content";
import { useState, useEffect } from "react";
import Loader from "../../components/Loader/Loader";

const Home = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1800);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Nav />
          <Content />
        </div>
      )}
    </>
  );
};

export default Home;
