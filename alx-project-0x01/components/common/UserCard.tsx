import React from "react";

interface UserCardProps {
  name: string;
  email: string;
  avatarUrl?: string; // optional avatar image
  role?: string;      // optional user role
}

const UserCard: React.FC<UserCardProps> = ({ name, email, avatarUrl, role }) => {
  return (
    <div className="flex items-center gap-4 p-4 bg-white shadow-md rounded-lg border">
      {/* Avatar */}
      <img
        src={avatarUrl || "/default-avatar.png"} // fallback avatar
        alt={name}
        className="w-12 h-12 rounded-full object-cover"
      />

      {/* User Details */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-600">{email}</p>
        {role && <span className="text-xs text-blue-600">{role}</span>}
      </div>
    </div>
  );
};

export default UserCard;
