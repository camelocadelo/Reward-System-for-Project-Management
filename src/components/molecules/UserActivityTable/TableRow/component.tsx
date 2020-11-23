import React from 'react';
import { TableRowProps } from './types';
import './index.scss';
import TagItem from 'components/atoms/TagItem/component';

function TableRow(props: TableRowProps): JSX.Element {
  const { projectName, eventType, eventBonus, timestamp, comment } = props;

  return (
    <tr className="table-row">
      <td className="table-cell"> {projectName} </td>
      <td className="table-cell">
        <TagItem
          bgColor={
            eventType === 'Telegram' ? '#CCF8FE' : eventType === 'GitHub' ? '#FFF5CC' : '#E2FBD7'
          }
          tag={eventType}
          color={
            eventType === 'Telegram' ? '#02A0FC' : eventType === 'GitHub' ? '#FFB200' : '#34B53A'
          }
        />
      </td>
      <td className="table-cell"> {eventBonus} </td>
      <td className="table-cell"> {timestamp} </td>
      <td className="table-cell"> {comment} </td>
    </tr>
  );
}

export default TableRow;
