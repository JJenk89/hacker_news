import { Post } from '../Types/posts';

const ListItem = ({post} : {post: Post}) => {
    return ( 
        <li 
            key={post.id}
            className='my-2 border p-2 rounded-md text-lg'
          >
            <a href={post.url ?? '#'} target="_blank" rel="noopener noreferrer">
              {post.title}
            </a>
            <p>score: {post.score}</p> 
            <p>written by: <span className='font-black'>{post.by}</span></p>
          </li>
     );
}
 
export default ListItem;