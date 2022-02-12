const Home = () => {
  return (
    <>
      <h2>Home</h2>
    <Post/>
    </>
  );
}

function Post() {
  return <h4 className='post'>I am a post</h4>
}
 
export default Home;