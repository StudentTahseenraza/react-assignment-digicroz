import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'

type User = {
  id: number
  name: string
  email: string
}

export default function Users() {
  const [page, setPage] = useState(1)
  const usersPerPage = 5

  const { data, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users')
      return res.data
    },
  })

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  const paginatedUsers = data.slice(
    (page - 1) * usersPerPage,
    page * usersPerPage
  )

  return (
    <div className="p-4">
<h2>Users Table</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {paginatedUsers.map((user: User) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button>Edit</button>
                <button onClick={()=>{
                  if(confirm('Delete user?')) alert('Deleted')
                }}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button disabled={page===1} onClick={()=>setPage(page-1)}>
        Prev
      </button>
      <button onClick={()=>setPage(page+1)}>
        Next
      </button>
    </div>
  )
} 



// return (
//   <div className="p-6">
//     <h2 className="text-2xl font-bold mb-4">Users</h2>

//     <table className="w-full border border-gray-300">
//       <thead className="bg-gray-200">
//         <tr>
//           <th className="p-2 border">Name</th>
//           <th className="p-2 border">Email</th>
//           <th className="p-2 border">Action</th>
//         </tr>
//       </thead>

//       <tbody>
//         {paginatedUsers.map((user: any) => (
//           <tr key={user.id} className="text-center">
//             <td className="p-2 border">{user.name}</td>
//             <td className="p-2 border">{user.email}</td>
//             <td className="p-2 border">
//               <button className="bg-yellow-400 px-2 py-1 mr-2 rounded">
//                 Edit
//               </button>
//               <button
//                 className="bg-red-500 text-white px-2 py-1 rounded"
//                 onClick={()=>{
//                   if(confirm('Delete user?')) alert('Deleted')
//                 }}
//               >
//                 Delete
//               </button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>

//     <div className="mt-4">
//       <button
//         className="bg-gray-300 px-3 py-1 mr-2 rounded"
//         disabled={page === 1}
//         onClick={()=>setPage(page-1)}
//       >
//         Prev
//       </button>

//       <button
//         className="bg-gray-300 px-3 py-1 rounded"
//         onClick={()=>setPage(page+1)}
//       >
//         Next
//       </button>
//     </div>
//   </div>
// )