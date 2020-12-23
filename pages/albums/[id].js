import React from "react";
import { GlobalContext } from "../_app";
import Form from "../../styles/Form";
import Button from "../../styles/Button";

const Album = ({ albumData }) => {
  const { globalState } = React.useContext(GlobalContext);
  const { url } = globalState;
  const { album } = albumData;
  const [picture, setPicture] = React.useState({
    name: "",
    description: "",
    image: "",
    albumId: album.id,
  });

  const handleChange = (event) => {
    setPicture({ ...picture, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`${url}/pictures/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(picture),
    });
    const data = await response.json();
    console.log(data);
  };

  const uploadImage = async (event) => {
    // get file from form
    const files = event.target.files;

    // Add file info to FormData
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "photo_shoppe"); // Cloudinary presets

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

  return (
    <div>
      <div>
        <h1>{album.name}</h1>
      </div>
      <Form>
        <h1 style={{ fontSize: "5rem" }}>Let's add a picture!</h1>
        <label htmlFor="file" className="file">
          Image:{" "}
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
          Name:{" "}
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
          Description:{" "}
          <input
            type="text"
            id="description"
            name="description"
            value={picture.description}
            onChange={handleChange}
            placeholder="Give Your Photo a Description"
          />
        </label>
        <Button type="submit" onClick={(event) => handleSubmit(event)}>
          Add to Album!
        </Button>
      </Form>
    </div>
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
