import React from 'react';
import { UserActivityTableProps } from './types';
import { columns } from './consts';
import './index.scss';
import TableRow from 'components/molecules/UserActivityTable/TableRow/component';

function UserActivityTable(props: UserActivityTableProps): JSX.Element {
  const { userActivityState } = props;

  return (
    <div>
      <table>
        <tr
          style={{
            width: '1200px',
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '23px',
          }}
        >
          {columns.map((c, i) => (
            <th
              className="table-header"
              style={{
                width: '280px',
                marginLeft: '60px',
                marginRight: '60px',
              }}
              key={i}
            >
              {c.title}
            </th>
          ))}
        </tr>
        <tbody className="table-body">
          {userActivityState &&
            userActivityState.map((u: any, i: number) => (
              <TableRow
                key={i}
                projectName={u.project_name}
                eventType={u.event_type}
                eventBonus={u.event_bonus}
                timestamp={u.timestamp}
                comment={u.message}
                gitType={u.type}
                metaData={u.metaData}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserActivityTable;
