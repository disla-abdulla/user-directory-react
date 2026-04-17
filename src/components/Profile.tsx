import Avatar from "./Avatar";
function Profile({ user }) {
  return (
    <div className="user-card">
      <Avatar image={user.image} altName={user.name} />
      <h3>{user.name}</h3>
      <h4>{user.email}</h4>
      <p>{user.address?.street}</p>
    </div>
  );
}
export default Profile;
