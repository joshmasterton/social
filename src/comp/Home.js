import "../style/Home.css";

const Home = ({user}) => {
  return (
    <div id="home">
      <header>{user.displayName}</header>
      <main>{user.email}</main>
      <footer></footer>
    </div>
  );
};

export default Home;