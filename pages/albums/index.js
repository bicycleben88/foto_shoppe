import React from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import Link from "next/link";
import Form from "../../components/styles/Form";
import Container from "../../components/styles/AlbumsIndex";
import Button from "../../components/styles/Button";

async function getAlbums() {
  const response = await fetch(`api/albums/`);
  const { albums } = await response.json();
  return albums;
}

async function createAlbum(newAlbum) {
  const response = await fetch(`/api/albums/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newAlbum),
  });
  const { album } = await response.json();
  return album;
}

async function deleteAlbum(albumId) {
  await fetch(`/api/albums/delete`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(albumId),
  });
}

export default function Index() {
  const queryClient = useQueryClient();

  const { data: albums, error } = useQuery("albums", getAlbums);

  const mutationCreateAlbum = useMutation(createAlbum, {
    onSuccess: async () => await queryClient.refetchQueries(),
  });

  const mutationDeleteAlbum = useMutation(deleteAlbum, {
    onSuccess: async () => await queryClient.refetchQueries(),
  });

  const [formData, setFormData] = React.useState({
    name: "",
    description: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    mutationCreateAlbum.mutate({
      name: formData.name,
      description: formData.description,
    });
    setFormData({
      name: "",
      description: "",
    });
  };

  const useDeleteMutation = (albumId) => {
    mutationDeleteAlbum.mutate({
      id: albumId,
    });
  };

  return (
    <Container>
      <Form>
        <h1>Create a New Album</h1>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Give Your Album a Name!"
          />
        </label>
        <label htmlFor="description">
          Description:
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Give Your Album a Description!"
          />
        </label>
        <Button onClick={(event) => handleSubmit(event)}>
          Make New Album!
        </Button>
      </Form>
      <div className="albums">
        {albums &&
          albums.map((album) => (
            <div className="album" key={album.id}>
              <Link href={`/albums/${album.id}`}>
                <a>
                  <Button>{album.name}</Button>
                </a>
              </Link>
              <h3>{album.description}</h3>
              <Button onClick={() => useDeleteMutation(album.id)}>
                Delete
              </Button>
              <Link href={`albums/${album.id}/edit`}>
                <a>
                  <Button>Edit</Button>
                </a>
              </Link>
            </div>
          ))}
      </div>
    </Container>
  );
}
