function TableLastSales({ dataset, show }) {
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
          {dataset?.slice(0, show).map((data) => (
            <tr key={data.idOrder}>
              <td>
                {data.customer.name} {data.customer.lastName}
              </td>
              <td>{data.status}</td>
              <td>{data.totalAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableLastSales;
