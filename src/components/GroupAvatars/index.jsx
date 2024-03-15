import React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

const stringToColor = (string) => {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
};

const stringAvatar = (name) => {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
};

const GroupAvatars = ({ data = [], max = 4 }) => {
  const tot = data.length;
  const left = data.length - max;
  const leftText = `+ ${left}`;
  return (
    <AvatarGroup sx={{ justifyContent: 'flex-end', width: 'fit-content' }}>
      {data.slice(0, max).map((user, index) => {
        const { name = '', url = '' } = user;
        return (
          <Avatar
            alt={name}
            // {...stringAvatar(name)}
            src={`https://picsum.photos/800/800?random=${Math.random(index)}`}
            key={index}
          />
        );
      })}
      {data.length > max && <Avatar>{`+${left}`}</Avatar>}
    </AvatarGroup>
  );
};

export default GroupAvatars;
