"use client";
import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  UserOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTheme } from "@/contexts/ThemeContextProvider";

const logo = "/images/logo/logo.png";

const { Sider } = Layout;

const LayoutSidebar = ({ collapsed }) => {
  const router = useRouter();
  const { mode } = useTheme();
  // const [background, setBackground] = useState(() => {
  //   if (typeof window !== "undefined") {
  //     if (mode === "dark") {
  //       return "#000";
  //     }
  //   }
  //   return "#fff";
  // });

  const handleNavigateRoutes = (e) => {
    const ROUTES = {
      dashboard: "/",
      money_transfer: "/users",
      setting: "/settings",
    };

    const routes = {
      1: ROUTES.dashboard,
      2: ROUTES.money_transfer,
      3: ROUTES.setting,
    };

    router.push(routes[e.key] || "/");
  };

  return (
    <div className="hidden lg:block">
      {/* Desktop Sidebar */}
      <Sider
        collapsible
        width={252}
        collapsed={collapsed}
        trigger={null}
        breakpoint="lg"
        theme={mode}
        // collapsedWidth="0"
        // style={{ background: background }}
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
          onClick={handleNavigateRoutes}
          openKeys={["sub1"]}
          theme={mode}
          mode="inline"
          className="font-medium text-lg!"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <DashboardOutlined />,
              label: <span>Dashboard</span>,
            },
            {
              key: "sub1",
              icon: <UserOutlined />,
              label: (
                <span className="text-neutral-500 dark:text-neutral-100">
                  Money Transfer
                </span>
              ),
              children: [
                {
                  key: "sub1.1",
                  label: "Add Money",
                  icon: <UserOutlined />,
                },
                {
                  key: "sub1.2",
                  label: "Request Money",
                  icon: <UserOutlined />,
                },
                {
                  key: "sub1.3",
                  label: "Receive Money",
                  icon: <UserOutlined />,
                },
                {
                  key: "sub1.4",
                  label: "Make Money",
                  icon: <UserOutlined />,
                },
              ],
            },
            { key: "3", icon: <SettingOutlined />, label: "Settings" },
          ]}
        />
      </Sider>
    </div>
  );
};

export default LayoutSidebar;
