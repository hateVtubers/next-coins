import Link from 'next/link';

export const Tbody = ({ coins }) => {
  return (
    <tbody>
      {coins.map((c) => (
        <Link href={`/coins/${c.id}`} key={c.id}>
          <tr className="border-b border-aquamarine-600 cursor-pointer hover:bg-aquamarine-700 hover:text-black hover:border-anakiwa-600" key={c.id}>
            <td className="flex items-center gap-2 py-4">
              <img src={c.image} alt="coin logo" width={25} height={25} />
              <a>{c.name}</a>
              <span className="text-gray-500">{c.symbol}</span>
            </td>
            <td className="px-5 hidden lg:table-cell">{c.market_cap}</td>
            <td>{c.current_price}</td>
            <td className={ c.price_change_percentage_24h > 0 ? "text-green-500" : "text-red-600"}>
              {c.price_change_percentage_24h}
            </td>
            <td className="pl-5 hidden lg:table-cell">{c.total_volume}</td>
          </tr>
        </Link>
      ))}
    </tbody>
  );
};
