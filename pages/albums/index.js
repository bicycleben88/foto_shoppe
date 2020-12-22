import React from "react";
import Container from "../../styles/AlbumsPage";
import Button from "../../styles/Button";

const Index = ({ albums }) => {
  return (
    <Container>
      <h1>Check Out These Albums:</h1>
      {albums.albums.map((album) => (
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

export async function getStaticProps() {
  const response = await fetch(`http://localhost:3000/api/albums/`);
  const albums = await response.json();
  return {
    props: {
      albums,
    },
  };
}
