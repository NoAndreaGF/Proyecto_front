function TableProductDash({ data }) {
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
            <th>Precio</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>          
            {data?.slice(0,3).map((sale) => (
            <tr key={sale.idProduct}>
              <td>{sale.name}</td>
              <td>{sale.price}</td>
              <td>{sale.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableProductDash;
