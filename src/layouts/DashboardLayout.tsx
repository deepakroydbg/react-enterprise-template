import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;