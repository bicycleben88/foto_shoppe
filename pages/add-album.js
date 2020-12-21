import React from "react";
import Form from "../styles/Form";
import Button from "../styles/Button";

const AddAlbum = (props) => {
  return (
    <Form>
      <h1>Create a New Album</h1>
      <label htmlFor="name">
        Name:
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Give Your Photo a Name!"
        />
      </label>
      <label htmlFor="description">
        Description:
        <input
          type="text"
          id="description"
          name="description"
          placeholder="Give Your Photo a Description!"
        />
      </label>
      <Button type="submit">Make New Album!</Button>
    </Form>
  );
};

export default AddAlbum;
