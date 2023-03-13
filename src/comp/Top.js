import "../style/Top.css";

const Top = ({user}) => {
  return (
    <div id="top">
      <header>{user.displayName}</header>
      <main>{user.email}</main>
      <footer></footer>
    </div>
  );
};

export default Top;