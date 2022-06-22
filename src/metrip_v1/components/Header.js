import React from 'react';
import { Appbar } from 'react-native-paper';

const Header = ({ title, icon }) => {
  return (
    <Appbar.Header>
      <Appbar.Action icon={icon} />
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};
export default Header;
