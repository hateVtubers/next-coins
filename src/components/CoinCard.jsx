import Link from "next/link";

export const CoinCard = ({ name, image, symbol }) => {
  return (
    <div className="bg-aquamarine-800 text-white inline-block p-5 rounded-lg">
      <div className="pb-3 text-right">
        <Link href="/">
          <a className="text-black">X</a>
        </Link>
      </div>
      <div className="flex items-center flex-col">
        <img src={image} alt="logo" width={150} />
        <div>
          <h1 className="text-lg inline-block mr-2">{name}</h1>
          <span className="text-gray-500">{symbol}</span>
        </div>
      </div>
    </div>
  );
};
