import { useUsers } from "@/features/user/userHooks";

const Dashboard = () => {
  const { data, isLoading, error } = useUsers();

  if (isLoading) return <p>Loading users...</p>;
  if (error) return <p>Error loading users</p>;

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Users</h1>

      <div className="grid md:grid-cols-2 gap-4">
        {data.map((user: any) => (
          <div key={user.id} className="p-4 bg-white shadow rounded">
            <p className="font-semibold">{user.name}</p>
            <p className="text-gray-500">{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;