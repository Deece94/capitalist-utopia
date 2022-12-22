import { logout } from "../helpers/users";

export default function User() {
  return (
    <div className="container">
      <button
        onClick={() => {
          logout();
        }}
        className="bg-black text-white p-2 rounded-lg"
      >
        Log out
      </button>
    </div>
  );
}
