import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Button from "../../../components/styles/Button";
import Container from "../../../components/styles/AlbumsShow";

const Album = ({ albumData }) => {
  const { album } = albumData;
  const router = useRouter();

  const handleDelete = async (albumId) => {
    await fetch(`/api/albums/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: albumId }),
    });
    router.push("/albums");
  };

  return (
    <Container>
      <header>
        <h1>{album.name}</h1>
        <div className="links">
          <Link href={`/albums/${album.id}/addPicture`}>
            <a>
              <button>Add A Picture</button>
            </a>
          </Link>
          <Link href={`/albums/${album.id}/edit`}>
            <a>
              <button>Edit Album</button>
            </a>
          </Link>
          <button onClick={() => handleDelete(album.id)}>Delete Album</button>
        </div>
      </header>
      <div>
        {album.pictures.map((picture) => {
          return (
            <div className="picture" key={picture.id}>
              <h2>{picture.name}</h2>
              <p>{picture.description}</p>
              <Image
                src={picture.image}
                alt={picture.name}
                width={500}
                height={640}
              />
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
