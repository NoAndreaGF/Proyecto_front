function Table({ data }) {
  return (
    <div
      className="table-responsive table mt-2"
      id="dataTable"
      role="grid"
      aria-describedby="dataTable_info"
    >
      <table className="table my-0" id="dataTable">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Estado</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>          
            {data?.slice(0,3).map((sale) => (
            <tr key={sale.idOrder}>
              <td>{sale.customer.name}{" "}{sale.customer.lastName}</td>
              <td>{sale.status}</td>
              <td>{sale.totalAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
