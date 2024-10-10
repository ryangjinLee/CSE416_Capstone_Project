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
    <PageHeader
      className="site-page-header"
      title="Team Bills"
      subTitle="This is a subtitle"
      extra={[
        <Button key="2" onClick={handleClick}>
          Go to Title
        </Button>,
        <Button key="1" type="primary">
          Contact Us
        </Button>,
      ]}
    />
  );
};

export default Header;
