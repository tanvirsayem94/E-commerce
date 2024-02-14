import AdminDashboard from "../component/AdminDashboard";
import NavbarDashboard from "../component/NavbarDashboard";



export default function dashboardLayout({ children }) {
    return (
      <div className="flex gap-5">
      <NavbarDashboard/>
      <AdminDashboard/>
      {children}
      </div>
    );
  }

