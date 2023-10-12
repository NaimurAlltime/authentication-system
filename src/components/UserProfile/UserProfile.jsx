import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const UserProfile = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "LogOut successful!.",
          showConfirmButton: false,
          timer: 1500,
        });

        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="mt-24">
      <div className="flex flex-col-reverse items-center">
        <div className="text-center mt-3">
          <h3 className="text-xl font-semibold">Name: {user?.displayName}</h3>
          <p>Email: {user?.email}</p>
        </div>
        <img
          className="h-[230px] w-[230px] rounded-full object-cover bg-gradient-to-r from-blue-500 via-green-500 to-blue-500 p-1"
          src={user?.photoURL}
          alt=""
        />
      </div>
      <div className="flex justify-center mt-7">
        <button
          onClick={handleLogOut}
          className="bg-blue-500 px-3 py-1 text-white font-medium text-md rounded-sm btn-info"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
