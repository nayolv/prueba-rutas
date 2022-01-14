import { Link, useNavigate, Outlet } from "react-router-dom";

export const Dashboard = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <Outlet />
      <button onClick={handleClick}>Log out</button>

      <Link to="welcome">say welcome</Link>
      <Link to='goodbye'>say goodbye</Link>
    </div>
  );
};
