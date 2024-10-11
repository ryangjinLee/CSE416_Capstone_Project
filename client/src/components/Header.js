import React from "react";
import { PageHeader } from "@ant-design/pro-layout";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import "./main_map/Components.css";

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="navBar">
      <PageHeader title="Team Bills" />
      <Button key="1" type="primary" onClick={handleClick}>
        Go to State Selection
      </Button>
    </div>
  );
};

export default Header;
