import { Card } from "antd";
import {
  SendOutlined,
  PlusCircleOutlined,
  ArrowDownOutlined,
  UserOutlined,
  SafetyOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

export default function ProfileDropdown() {
  return (
    <Card className="w-72 rounded-2xl shadow-xl border-0">
      {/* Header */}
      <div className="flex items-center gap-3 pb-3 border-b">
        <img
          src="https://i.pravatar.cc/60"
          className="w-12 h-12 rounded-full"
          alt="profile"
        />
        <div>
          <h3 className="font-semibold text-gray-800">Tomas William</h3>
          <p className="text-sm text-gray-500">william@gmail.com</p>
        </div>
      </div>

      {/* Menu List */}
      <div className="mt-2 space-y-1">
        <MenuItem icon={<SendOutlined />} label="Send Money" />
        <MenuItem icon={<PlusCircleOutlined />} label="Add Funds" />
        <MenuItem icon={<ArrowDownOutlined />} label="Withdraw" />

        <Divider />

        <MenuItem icon={<UserOutlined />} label="KYC Verification" />
        <MenuItem icon={<SafetyOutlined />} label="2FA Verification" />

        <Divider />

        <MenuItem icon={<LogoutOutlined />} label="Logout" danger />
      </div>
    </Card>
  );
}

function MenuItem({ icon, label, danger }) {
  return (
    <button
      className={`w-full flex items-center gap-3 px-1 py-2 rounded-lg text-left 
        ${danger ? "text-red-600 font-semibold" : "text-gray-700"} 
        hover:bg-gray-100 transition`}
    >
      <span className="text-xl">{icon}</span>
      <span className="text-sm">{label}</span>
    </button>
  );
}

function Divider() {
  return <div className="my-2 border-t border-gray-200"></div>;
}
