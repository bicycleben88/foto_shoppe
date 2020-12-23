import React from "react";
import Button from "../../components/styles/Button";
import Container from "../../components/styles/AlbumsShow";

const Album = ({ albumData }) => {
  const { album } = albumData;

  const handleDelete = async (pictureId) => {
    await fetch(`${url}/pictures/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: pictureId }),
    });
  };

  return (
    <Container>
      <div>
        <h1>{album.name}</h1>
        {album.pictures.map((picture) => {
          return (
            <div className="picture" key={picture.id}>
              <h2>{picture.name}</h2>
              <p>{picture.description}</p>
              <img src={picture.image} alt={picture.name} />
              <Button onClick={() => handleDelete(picture.id)}>Delete</Button>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Album;

export async function getStaticPaths() {
  const response = await fetch(`http://localhost:3000/api/albums`);
  const data = await response.json();
  const paths = [];
  data.albums.map((album) => {
    paths.push({
      params: {
        id: album.id.toString(),
      },
    });
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const response = await fetch(`http://localhost:3000/api/albums/${params.id}`);
  const albumData = await response.json();
  return {
    props: {
      albumData,
    },
  };
}
