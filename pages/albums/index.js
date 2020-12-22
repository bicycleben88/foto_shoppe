import React from "react";
import { GlobalContext } from "../_app";

const Index = (props) => {
  const { globalState } = React.useContext(GlobalContext);
  const { url } = globalState;
  const [albums, setAlbums] = React.useState(null);

  const getAlbums = async () => {
    const response = await fetch(`${url}/albums/`);
    const data = await response.json();
    setAlbums(data);
  };

  React.useEffect(() => {
    getAlbums();
  }, []);
  return <h1>index page</h1>;
};

export default Index;
