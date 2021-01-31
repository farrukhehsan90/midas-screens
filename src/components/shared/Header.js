import React from "react";
import { TouchableOpacity } from "react-native";

import { Appbar } from "react-native-paper";

const Header = ({ title }) => {
  return (
    <Appbar style={{ backgroundColor: "#FFFFFF" }}>
      <TouchableOpacity>
        <Appbar.Action icon="menu" />
      </TouchableOpacity>

      <Appbar.Content title={title} />

      <TouchableOpacity>
        <Appbar.Action icon="bell" />
      </TouchableOpacity>

      <TouchableOpacity>
        <Appbar.Action icon="magnify" />
      </TouchableOpacity>
    </Appbar>
  );
};

export default Header;
