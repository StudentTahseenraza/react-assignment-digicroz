import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'

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
      <h2>Users</h2>

      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {paginatedUsers.map((user: any) => (
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