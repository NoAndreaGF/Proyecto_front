function Table({data}) {
  return (
    <ul className="list-group">
      {data?.map((sale) => (
          <li
            key={sale.idOrder}
          >
            {sale.customer.name}
            {sale.status}
          </li>
        ))}
    </ul>
  );
}

export default Table;
