import "../style/Bottom.css";

const Bottom = ({user}) => {
  return (
    <div id="bottom">
      <header>{user.displayName}</header>
      <main>{user.email}</main>
      <footer></footer>
    </div>
  );
};

export default Bottom;