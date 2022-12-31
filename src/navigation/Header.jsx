import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <div className="flex text-purple-900">
      <nav >
        <ul className="flex my-3">
          <li className="bg-purple-100 px-2 py-1 border-purple-500 text-shadow mx-1 rounded-md "><NavLink to="/">Home</NavLink></li>
          <li className="bg-purple-100 px-2 py-1 border-purple-500 text-shadow mx-1 rounded-md "><NavLink to="/axios">Axios</NavLink></li>
          <li className="bg-purple-100 px-2 py-1 border-purple-500 text-shadow mx-1 rounded-md "><NavLink to="/fetchapi">Fetch Inbuilt Web API</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header