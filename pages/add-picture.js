import React from "react";
import Form from "../styles/Form";
import Button from "../styles/Button";

const AddPicture = (props) => {
  return (
    <div>
      <h1>Let's add a picture!</h1>
      <Form>
        <label htmlFor="file">
          Image:{" "}
          <input
            type="file"
            id="file"
            name="file"
            placeholder="Upload an image"
          />
        </label>
        <label htmlFor="name">
          Name:{" "}
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Give Your Photo a Name!"
          />
        </label>
        <label htmlFor="description">
          Description:{" "}
          <textarea
            type="text"
            id="description"
            name="description"
            placeholder="Give Your Photo a Description"
          />
        </label>
        <Button type="submit">Add to Album!</Button>
      </Form>
    </div>
  );
};

export default AddPicture;
