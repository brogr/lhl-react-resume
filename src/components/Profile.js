function Profile(props) {
  return (
    <hgroup>
      <img src="./profile-hex.png" alt="Profile" />
      <h1>{props.name}</h1>
      <h2>{props.title}</h2>
      <h3>{props.description}</h3>
    </hgroup>
  );
}

export default Profile;