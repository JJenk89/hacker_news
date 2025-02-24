import useFetchAPI from './Hooks/FetchAPI';
import ListItem from './components/ListItem';

function App() {

  const {posts, loading, error} = useFetchAPI();
  
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div className='flex justify-center items-center flex-col p-5'>
      <h1 className='text-3xl font-bold'>Hacker News Top 10 Articles</h1>
      <ul className='mt-5'>
        {posts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </ul>
    </div>
  )
}
export default App
