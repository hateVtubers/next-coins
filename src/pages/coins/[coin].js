import { useEffect } from "react";
import { CoinCard } from "../../components/CoinCard";

const Coin = ({ data: { name, image: { large }, symbol } }) => {
  return (
    <div className="bg-black min-h-screen grid justify-items-center content-center">
      <CoinCard name={name} image={large} symbol={symbol}></CoinCard>
    </div>
  );
};

export const getServerSideProps = async ({ query: { coin } }) => {
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${coin}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default Coin;
