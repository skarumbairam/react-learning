const obj = {
  data: [
    { name: "Name", id: "ID", role: "Role", area: "Area" },
    { name: "Senthil", id: 1, role: "developer", area: "Chennai" },
    { name: "Siva", id: 2, role: "Sr.Developer", area: "Mumbai" },
    { name: "Suresh", id: 3, role: "Lead", area: "Chennai" },
    { name: "Muthu", id: 4, role: "Sr.Lead", area: "Singapore" },
  ],
};

const TableRow = (props) => {
  const { id, name, role, area } = props.item;

  return (
    <>
      {props.index === 0 ? (
        <tr>
          <th>{id} </th>
          <th>{name} </th>
          <th>{role} </th>
          <th>{area} </th>
        </tr>
      ) : (
        <tr>
          <td>{id} </td>
          <td>{name} </td>
          <td>{role} </td>
          <td>{area} </td>
        </tr>
      )}
    </>
  );
};
const Table = () => {
  return (
    <div>
      <h3>Dynamic Table Creation</h3>
      <table>
        <tbody>
          {obj.data.map((item, index) => {
            return (
              <TableRow key={`table-row-${index}`} item={item} index={index} />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
