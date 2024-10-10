import React from "react";
import { PageHeader } from "@ant-design/pro-layout";
import { Button } from "antd";
import "./main_map/Components.css";

const Header = () => (
  <PageHeader
    className="site-page-header"
    title="Team Bills"
    subTitle="This is a subtitle"
    extra={[
      <Button key="2">Operation</Button>,
      <Button key="1" type="primary">
        Primary
      </Button>,
    ]}
  />
);

export default Header;
