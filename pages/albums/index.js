import React from "react";
import { useQuery, useMutation, queryCache } from "react-query";
import Container from "../../components/styles/AlbumsIndex";
import Button from "../../components/styles/Button";

const Index = () => {
  const getAlbumsRequest = async () => {
    const response = await fetch("/api/albums");
    const data = await response.json();
    const { albums } = data;
    return albums;
  };

  const { data: albums } = useQuery("ablums", getAlbumsRequest);

  return (
    <Container>
      <h1>Check Out These Albums:</h1>
      {albums &&
        albums.map((album) => (
          <div className="album" key={album.id}>
            <h2>{album.name}</h2>
            <h3>{album.description}</h3>
            <Button>Add Pictures</Button>
            <Button>Delete Album</Button>
          </div>
        ))}
    </Container>
  );
};

export default Index;

// export async function getStaticProps() {
//   const response = await fetch(`http://localhost:3000/api/albums/`);
//   const albums = await response.json();
//   return {
//     props: {
//       albums,
//     },
//   };
// }
