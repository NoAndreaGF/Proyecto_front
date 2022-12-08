function TableLastProducts({ dataset, show }) {
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
          {dataset?.slice(0, show).map((data) => (
            <tr key={data.idProduct}>
              <td>{data.name}</td>
              <td>{data.price}</td>
              <td>{data.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableLastProducts;
