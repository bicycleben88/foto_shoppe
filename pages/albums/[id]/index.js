import React from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import Image from "next/image";
import Form from "../../../components/styles/Form";
import Button from "../../../components/styles/Button";
import Container from "../../../components/styles/AlbumsShow";

let globalAlbumId = "";

async function getAlbum() {
  const response = await fetch(
    `http://localhost:3000/api/albums/${globalAlbumId}`
  );
  const { album } = await response.json();
  return album;
}

async function createPicture(pictureData) {
  const response = await fetch(`/api/pictures/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pictureData),
  });
  const { picture } = response.json();
  return picture;
}

async function deletePicture(pictureId) {
  await fetch(`/api/pictures/delete`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pictureId),
  });
}

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
  globalAlbumId = params.id;
  const albumData = await getAlbum();
  return {
    props: {
      albumData,
    },
  };
}

export default function Album({ albumData }) {
  globalAlbumId = albumData.id;
  const queryClient = useQueryClient();

  const { data: album, status } = useQuery("album", getAlbum);

  const createPictureMutation = useMutation(createPicture, {
    onSuccess: async () => await queryClient.refetchQueries(),
  });

  const deletePictureMutation = useMutation(deletePicture, {
    onSuccess: async () => await queryClient.refetchQueries(),
  });

  const [picture, setPicture] = React.useState({
    name: "",
    description: "",
    image: "",
  });

  const handleChange = (event) => {
    setPicture({ ...picture, [event.target.name]: event.target.value });
  };

  const uploadImage = async (event) => {
    // get file from form
    const files = event.target.files;

    // Add file info to FormData
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "photo_shoppe"); // Cloudinary presets

    // 3rd Party API that hosts image to be uploaded on DB
    const response = await fetch(
      "https://api.cloudinary.com/v1_1/drma6uq3f/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const image = await response.json();
    setPicture({ ...picture, image: image.secure_url });
  };

  const useCreatePicture = (event) => {
    event.preventDefault();
    createPictureMutation.mutate({
      name: picture.name,
      description: picture.description,
      image: picture.image,
      albumId: albumData.id,
    });
    setPicture({
      name: "",
      description: "",
      image: "",
    });
  };

  const useDeletePicture = (pictureId) => {
    deletePictureMutation.mutate({
      id: pictureId,
    });
  };

  return (
    <Container>
      <Form>
        <h1>Add a Picture</h1>
        <label htmlFor="file" className="file">
          Image:
          <input
            type="file"
            id="file"
            name="file"
            placeholder="Upload an image"
            onChange={uploadImage}
          />
          {picture.image && (
            <img width="300" src={picture.image} alt="Album Image Preview" />
          )}
        </label>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            id="name"
            name="name"
            value={picture.name}
            onChange={handleChange}
            placeholder="Give Your Photo a Name!"
          />
        </label>
        <label htmlFor="description">
          Description:
          <input
            type="text"
            id="description"
            name="description"
            value={picture.description}
            onChange={handleChange}
            placeholder="Give Your Photo a Description!"
          />
        </label>
        <Button type="submit" onClick={(event) => useCreatePicture(event)}>
          Add to Album!
        </Button>
      </Form>
      <div>
        {album &&
          album.pictures.map((picture) => {
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
                <Button onClick={() => useDeletePicture(picture.id)}>
                  Delete
                </Button>
              </div>
            );
          })}
      </div>
    </Container>
  );
}
