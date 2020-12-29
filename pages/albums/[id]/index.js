import React from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import Image from "next/image";
import { queryAlbum } from "../../api/albums/[id]";
import { queryAlbums } from "../../api/albums";
import Form from "../../../components/styles/Form";
import Button from "../../../components/styles/Button";
import Container from "../../../components/styles/AlbumsShow";

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
  const albums = await queryAlbums();
  const paths = [];

  albums.map((album) => {
    return paths.push({
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
  const response = await queryAlbum(params.id);
  const data = await JSON.stringify(response);
  const initialAlbumData = await JSON.parse(data);
  return {
    props: {
      initialAlbumData,
    },
  };
}

export default function Album({ initialAlbumData }) {
  const queryClient = useQueryClient();

  const { data: album } = useQuery(
    "album",
    () => fetch(`/api/albums/${initialAlbumData.id}`).then((res) => res.json()),
    {
      initialData: initialAlbumData,
    }
  );

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
      albumId: initialAlbumData.id,
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
        {album.album &&
          album.album.pictures.map((picture) => {
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
