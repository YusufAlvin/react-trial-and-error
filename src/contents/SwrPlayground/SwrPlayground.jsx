import React from 'react';
import useSWR, {mutate} from 'swr';
import styles from './SwrPlayground.module.scss';
import axios from 'axios';

const url = 'http://localhost:3001/posts';

const fetcher = (url) => axios.get(url).then((res) => res.data);

// const usePost = (id) => {
//   const url = `https://jsonplaceholder.typicode.com/todos/${id}`;
//   const { data, error, isLoading } = useSWR(url, fetcher);

//   return { data, error, isLoading };
// }

const Table = () => {
  const {data, error, isLoading} = useSWR(url, fetcher);

  if (isLoading) return <>Loading...</>;
  if (error) return <>Error</>;

  return (
    <div className={styles['table-container']}>
      <table>
        <thead>
          <th>ID</th>
          <th>TITLE</th>
        </thead>
        <tbody>
          {data
            .sort((a, b) => b.id - a.id)
            .map((d) => (
              <tr>
                <td>{d.id}</td>
                <td>{d.title}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

const EditPost = () => {
  const [id, setId] = React.useState('');
  const [title, setTitle] = React.useState('');

  const handleChangeId = (event) => {
    setId(event.target.value);
  };

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleClick = async () => {
    await axios.put(`${url}/${id}`, {title});
    mutate(url);
  };

  return (
    <div className={styles['edit-post']}>
      <div>Edit Post</div>
      <span>Id</span>
      <input type="text" value={id} onChange={handleChangeId} />
      <span>Title</span>
      <input type="text" value={title} onChange={handleChangeTitle} />
      <br />
      <button onClick={handleClick}>Edit</button>
    </div>
  );
};

const AddPost = () => {
  const [title, setTitle] = React.useState('');

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleClick = async () => {
    await axios.post(url, {title});
    mutate(url);
    setTitle('');
  };

  const handleKeyDown = async (event) => {
    if (event.key === 'Enter') {
      await axios.post(url, {title});
      mutate(url);
      setTitle('');
    }
  };

  return (
    <div className={styles['edit-post']}>
      <div>Add Post</div>
      <span>Title</span>
      <input type="text" value={title} onChange={handleChangeTitle} onKeyDown={handleKeyDown} />
      <br />
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

const SwrPlayground = () => {
  return (
    <div className={styles.container}>
      <Table />
      <EditPost />
      <AddPost />
    </div>
  );
};

export default SwrPlayground;
