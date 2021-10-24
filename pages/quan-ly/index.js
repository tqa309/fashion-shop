import Layout from "../../layouts/Main";
// import Link from "next/link";
import AdminDashboard from "../../components/Admin/Dashboard";
import Admin from "../../components/Admin";

function AdminIndex() {
  return (
    <Layout>
      <Admin>
        <AdminDashboard />
      </Admin>
    </Layout>
  );
}

export default AdminIndex;
