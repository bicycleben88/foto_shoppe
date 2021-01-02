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
  await fetch(`/api/albums/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newAlbum),
  });
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

async function editAlbum(editedAlbum) {
  await fetch(`/api/albums/edit`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(editedAlbum),
  });
}

export default function Index() {
  const queryClient = useQueryClient();

  const { data: albums, error } = useQuery("albums", getAlbums);

  const [editState, setEditState] = React.useState({ editAlbum: false });

  const [editForm, setEditForm] = React.useState({});

  const [newForm, setNewForm] = React.useState({
    name: "",
    description: "",
  });

  const mutationCreateAlbum = useMutation(createAlbum, {
    onSuccess: async () => await queryClient.refetchQueries(),
  });

  const mutationDeleteAlbum = useMutation(deleteAlbum, {
    onSuccess: async () => await queryClient.refetchQueries(),
  });

  const mutationEditAlbum = useMutation(editAlbum, {
    onSuccess: async () => await queryClient.refetchQueries(),
  });

  const handleNewChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };

  const handleEditChange = (event) => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value });
  };

  const useCreateMutation = (event) => {
    event.preventDefault();
    mutationCreateAlbum.mutate({
      name: newForm.name,
      description: newForm.description,
    });
    setNewForm({
      name: "",
      description: "",
    });
  };

  const useDeleteMutation = (albumId) => {
    mutationDeleteAlbum.mutate({
      id: albumId,
    });
  };

  const useEditMutation = (editedAlbum) => {
    mutationEditAlbum.mutate({
      id: editedAlbum.id,
      name: editedAlbum.name,
      description: editedAlbum.description,
    });
    setEditState({ editAlbum: false });
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
            value={newForm.name}
            onChange={handleNewChange}
            placeholder="Give Your Album a Name!"
          />
        </label>
        <label htmlFor="description">
          Description:
          <input
            type="text"
            id="description"
            name="description"
            value={newForm.description}
            onChange={handleNewChange}
            placeholder="Give Your Album a Description!"
          />
        </label>
        <Button onClick={(event) => useCreateMutation(event)}>
          Make New Album!
        </Button>
      </Form>
      {editState.editAlbum && (
        <Form className="edit-form">
          <label htmlFor="name">
            Name:
            <input
              type="text"
              name="name"
              value={editForm.name}
              onChange={handleEditChange}
            />
          </label>
          <label htmlFor="description">
            Description:
            <input
              type="text"
              name="description"
              value={editForm.description}
              onChange={handleEditChange}
            />
          </label>
          <Button onClick={() => useEditMutation(editForm)}>
            Update Album!
          </Button>
        </Form>
      )}
      <div>
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
              <Button
                onClick={() => {
                  setEditState({ editAlbum: true });
                  setEditForm({
                    name: album.name,
                    description: album.description,
                    id: album.id,
                  });
                }}
              >
                Edit
              </Button>
            </div>
          ))}
      </div>
    </Container>
  );
}
