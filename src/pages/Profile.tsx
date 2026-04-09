import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { setUser } from "@/features/user/userSlice";

const Profile = () => {
  const user = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState(user);

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    dispatch(setUser(formData)); // ✅ update Redux
    setIsEditing(false);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">My Profile</h1>
        <p className="text-gray-500">Manage your account details</p>
      </div>

      {/* Profile Card */}
      <div className="bg-white p-6 rounded-lg shadow flex flex-col md:flex-row gap-6 items-center md:items-start">
        
        {/* Avatar */}
        <div className="w-24 h-24 rounded-full bg-blue-500 text-white flex items-center justify-center text-3xl font-bold">
          {formData.name?.charAt(0)}
        </div>

        {/* Info */}
        <div className="flex-1 space-y-2 text-center md:text-left">
          <h2 className="text-xl font-semibold text-gray-800">
            {formData.name}
          </h2>
          <p className="text-gray-500">{formData.role}</p>
          <p className="text-gray-500">{formData.email}</p>

          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Edit Profile
            </button>
          ) : (
            <button
              onClick={handleSave}
              className="mt-3 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
            >
              Save
            </button>
          )}
        </div>

      </div>

      {/* Details Section */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Account Details</h2>

        <div className="grid md:grid-cols-2 gap-4">

          <div>
            <label className="text-sm text-gray-500">Full Name</label>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-full mt-1 p-2 border rounded-md"
            />
          </div>

          <div>
            <label className="text-sm text-gray-500">Email</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-full mt-1 p-2 border rounded-md"
            />
          </div>

          <div>
            <label className="text-sm text-gray-500">Role</label>
            <input
              name="role"
              type="text"
              value={formData.role}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-full mt-1 p-2 border rounded-md"
            />
          </div>

          <div>
            <label className="text-sm text-gray-500">Location</label>
            <input
              name="location"
              type="text"
              value={formData.location}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-full mt-1 p-2 border rounded-md"
            />
          </div>

        </div>
      </div>

    </div>
  );
};

export default Profile;