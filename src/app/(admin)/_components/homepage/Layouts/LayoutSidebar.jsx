"use client";
import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  UserOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import Image from "next/image";

const logo = "/images/logo/logo.png";

const { Sider } = Layout;

const LayoutSidebar = ({ collapsed }) => {
  return (
    <div className="hidden lg:block">
      {/* Desktop Sidebar */}
      <Sider
        collapsible
        collapsed={collapsed}
        trigger={null}
        breakpoint="lg"
        // collapsedWidth="0"
        style={{ background: "#fff" }}
        className="sticky! top-0! h-screen!"
      >
        <div className="p-2 lg:px-4  lg:py-8">
          <Image src={logo} height={100} width={200} alt="Logo" />
        </div>
        {/* <div
          style={{
            height: 64,
            margin: 16,
            background: "rgba(255,255,255,0.2)",
            borderRadius: 8,
          }}
        /> */}
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            { key: "1", icon: <DashboardOutlined />, label: "Dashboard" },
            { key: "2", icon: <UserOutlined />, label: "Users" },
            { key: "3", icon: <SettingOutlined />, label: "Settings" },
          ]}
        />
      </Sider>
    </div>
  );
};

export default LayoutSidebar;
