import Head from "next/head";
import Container from "../components/styles/Home";

export default function Home() {
  return (
    <Container>
      <h4>click the banner to begin</h4>
      <div className="photo-container">
        <div className="photo" />
        <div className="photo" />
        <div className="photo" />
      </div>
      <h2>The One Stoppe Shoppe for Posting Pictures</h2>
    </Container>
  );
}
