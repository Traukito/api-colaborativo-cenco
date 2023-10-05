'use client'

function Users({users}) {
  return (
    <ul className="mt-5">
    {users.map(user => (
      <li key={user.id} className="bg-slate-800 mt-2 mb-2 p-4 rounded-md text-gray-100 flex justify-between"
      >
        <div className="">
          <h5 className="font-bold">{user.id} {user.first_name} {user.last_name}</h5>
          <p className="text-slate-300">email: {user.email}</p>
        </div>
        <img src={user.avatar} alt="Imagen no disponible" className="rounded-full w-30" />
      </li>
    ))}
  </ul>
  )
}

export default Users;