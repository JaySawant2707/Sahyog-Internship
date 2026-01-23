import useUsersApi from "./useUsersApi";

export default function UsersWithHook() {
  //using the custom hook
  const { usersData, loading, errorMessage, loadUsers } = useUsersApi();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Using Custom Hook - Users List</h2>

      {/* BUTTON : To call Load Users */}
      <button onClick={loadUsers}>Load Users(Custom Hook)</button>

      {loading && <p>Loading Users...</p>}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {usersData.map((user) => (
        <div
          key={user.id}
          style={{
            marginTop: "10px",
            padding: "10px",
            border: "4px solid #ddd",
          }}
        >
          <p>
            <strong>Name</strong> {user.name}
          </p>
          <p>
            <strong>Email</strong> {user.email}
          </p>
          <p>
            <strong>Phone</strong> {user.phone}
          </p>
        </div>
      ))}
    </div>
  );
}
