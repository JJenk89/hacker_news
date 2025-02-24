import axios from 'axios';
import { useEffect, useState } from 'react';
import { Post } from '../Types/posts';

const useFetchAPI = () => {

    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const client = axios.create({
        baseURL: 'https://hacker-news.firebaseio.com/v0/'
      });

    useEffect(() => {
        const fetchPosts = async () => {
          try {
            const { data: ids } = await client.get('topstories.json');
            const topTenIds = ids.slice(0, 10);
      
            const stories = await Promise.all(
              topTenIds.map(async (id: number) => {
                const { data } = await client.get(`item/${id}.json`);
                return data;
              })
            );
      
            setPosts(stories);
          } catch (error) {
            setError(error as "Error: Please Try Again Later!");
            console.error(error);
          } finally {
            setLoading(false);
          }
        };
      
        fetchPosts();
      }, []);

    return {posts, error, loading};
}
 
export default useFetchAPI;