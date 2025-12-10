"use client";
import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  UserOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import Image from "next/image";

import LayoutHeader from "./_components/homepage/Layouts/LayoutHeader";
import LayoutSidebar from "./_components/homepage/Layouts/LayoutSidebar";

const logo = "/images/logo/logo.png";

const { Sider, Content } = Layout;

export default function DashboardLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <LayoutSidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <Layout>
        <LayoutHeader collapsed={collapsed} setCollapsed={setCollapsed} />

        {/* Main content */}
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            background: "#fff",
            overflow: "hidden",
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
