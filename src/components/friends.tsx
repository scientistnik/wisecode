import React from 'react';

export default function FriendsComponent({friends, content}) {
  return <div>Your friends are {friends.join(',')} : {JSON.stringify(content)}</div>;
}