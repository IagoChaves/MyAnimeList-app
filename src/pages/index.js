import styled from "styled-components";
import Header from "../components/Header";
import CardsContainer from "../components/CardsContainer";
import SearchInput from "../components/SearchInput";

export default function Home() {
  return (
    <div
      style={{
        maxWidth: 1500,
        margin: "0 auto",
        padding: "40px 10px",
        font: "400 16px Roboto, sans-serif",
      }}
    >
      <Header />
      <SearchInput />
      <CardsContainer />
    </div>
  );
}
