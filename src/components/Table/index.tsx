import React from 'react';
import TableRow from './TableRow';

interface ITableProps {
  header: string[];
  data: any[];
}

const Table: React.FC<ITableProps> = (props: ITableProps) => (
  <table className="table">
    <thead>
      <tr>
        {props.header.map((key, index) => <th key={index}> {key} </th>)}
      </tr>
    </thead>
    <tbody>
      {props.data.map((topic, index) =>
        <TableRow
          key={topic.id}
          index={(index + 1)}
          id={topic.id}
          title={topic.title}
          team={topic.team}
          progress={topic.progress}
         />)}
    </tbody>
  </table>
)

export default Table;