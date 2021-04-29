import React from 'react';
import { TableRowProps } from './types';
import './index.scss';
import TagItem from 'components/atoms/TagItem/component';
import { format, parseISO } from 'date-fns';

function TableRow(props: TableRowProps): JSX.Element {
  const { projectName, eventType, eventBonus, timestamp, comment, metaData } = props;

  const shortenMessage = (message: any) => {
    let newMessage = message;
    if (message.length > 38) {
      newMessage = message.slice(0, 38) + '. . .';
    }
    return newMessage;
  };

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
      <td className="table-cell"> {format(parseISO(timestamp), 'dd MMM, yyyy HH:mm')} </td>
      <td className="table-cell">{eventType === 'GitHub' ? shortenMessage(metaData) : comment} </td>
    </tr>
  );
}

export default TableRow;
