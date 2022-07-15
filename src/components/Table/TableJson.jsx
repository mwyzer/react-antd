import 'antd/dist/antd.css';
import { useState, useEffect } from 'react';
import JsonData from '../../data/people.json';

function TableJson() {
  const [loading, setLoading] = useState(false);

  const DisplayData = JsonData.map((info) => {
    return (
      <tr>
        <td>{info._id}</td>
        <td>{info.name}</td>
        <td>{info.email}</td>
        <td>{info.address}</td>
      </tr>
    );
  });

  return (
    <div>
      <table
        loading={loading}
        columns={columns}
        dataSource={dataSource}
        pagination={{ current: 3, pageSize: 15 }}
        class='table table-striped'
      >
        <thead>
          <tr>
            <th>NO</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>{DisplayData}</tbody>
      </table>
    </div>
  );
}

export default TableJson;
