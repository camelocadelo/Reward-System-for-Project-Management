import React from 'react';
import { TagItemProps } from './types';
import './index.scss';

function TagItem(props: TagItemProps): JSX.Element {
  const { tag, bgColor, color } = props;
  return (
    <div className="tag" style={{ color: color, backgroundColor: bgColor, fontSize: '15px' }}>
      {tag}
    </div>
  );
}

export default TagItem;
