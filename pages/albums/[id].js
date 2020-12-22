import React from "react";

const Album = ({ albumData }) => {
  return <h1>God I hope this works</h1>;
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
