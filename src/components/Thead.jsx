export const Thead = () => {
  return (
    <thead>
      <tr className="text-left text-base">
        <th>NAME</th>
        <th>PRICE</th>
        <th className="px-5 hidden lg:table-cell">MARK CAP</th>
        <th>24H</th>
        <th className="pl-5 hidden lg:table-cell">TOTAL VALUME</th>
      </tr>
    </thead>
  );
};
