import React from "react";
import { GlobalContext } from "../_app";
import Form from "../../styles/Form";
import Button from "../../styles/Button";

const AddAlbum = (props) => {
  const { globalState } = React.useContext(GlobalContext);
  const { url } = globalState;
  const [album, setAlbum] = React.useState({
    name: "",
    description: "",
  });

  const handleChange = (event) => {
    setAlbum({ ...album, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`${url}/albums/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(album),
    });
    const data = await response.json();
  };

  return (
    <Form>
      <h1>Create a New Album</h1>
      <label htmlFor="name">
        Name:
        <input
          type="text"
          id="name"
          name="name"
          value={album.name}
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
          value={album.description}
          onChange={handleChange}
          placeholder="Give Your Album a Description!"
        />
      </label>
      <Button onClick={(event) => handleSubmit(event)}>Make New Album!</Button>
    </Form>
  );
};

export default AddAlbum;
