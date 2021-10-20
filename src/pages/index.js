import { useState } from "react";
import { Tbody } from "../components/Tbody";
import { Thead } from "../components/Thead";
import HeadContainer from "../container/head";
import Image from 'next/image';

const Home = ({ coins }) => {
  const [money, setMoney] = useState(coins);
  const handleChange = (t) => {
    const filter = coins.filter((f) =>
      f.name.toLowerCase().includes(t.target.value.toLowerCase()) ||
      f.symbol.toLowerCase().includes(t.target.value.toLowerCase())
    );
    setMoney(filter);
  };

  return (
    <HeadContainer>
      <div className="bg-black min-h-screen text-white">
        <header className="text-center mb-10">
          <div className="pt-10 pb-5">
            <Image src="/pain.jpg" alt="pain" width={250} height={300}></Image>
          </div>
          <input
            className="text-anakiwa-900 bg-aquamarine-600 outline-none w-60 lg:w-80"
            type="text"
            onChange={handleChange}
          />
        </header>
        <main className="mx-auto">
          <table className="table-fixed border-collapse text-sm mx-auto bg-black">
            <Thead></Thead>
            <Tbody coins={money}></Tbody>
          </table>
        </main>
      </div>
    </HeadContainer>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  );
  const coins = await res.json();
  return {
    props: {
      coins,
    },
  };
};

export default Home;

