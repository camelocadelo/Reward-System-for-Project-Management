import React from 'react';
import { TagItemProps } from './types';
import './index.scss';

function TagItem(props: TagItemProps): JSX.Element {
  const { tag, bgColor } = props;
  return (
    <div className="tag" style={{ backgroundColor: bgColor }}>
      {tag}
    </div>
  );
}

export default TagItem;
