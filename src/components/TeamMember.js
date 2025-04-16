import React from 'react';

const TeamMember = ({ name, role, bio }) => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg border-2 border-gray-700 hover:border-cyan-400 transition-all duration-300">
      <div className="flex items-center justify-center h-32 w-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-900 to-gray-800 text-white text-4xl font-bold">
        {name.charAt(0)}
      </div>
      <h4 className="text-xl font-semibold text-center text-white mb-1">{name}</h4>
      <p className="text-center text-cyan-400 mb-3">{role}</p>
      <p className="text-center text-gray-300">{bio}</p>
    </div>
  );
};

export default TeamMember;