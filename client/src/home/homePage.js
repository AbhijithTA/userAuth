const HomePage = ({ match }) => {
    console.log(match); 
    const { username } = match.params;
    console.log(username);
    return (
      <div>
        <h2>Welcome, {username}!</h2>
        Welcome to the HomePage
      </div>
    );
  };
  
  export default HomePage;
  