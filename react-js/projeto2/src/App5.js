//Hooks - UseRef
/*
  - Cria uma referencia para alguma coisa,
  - Muito usado para pegar e manipular elemento da DOM,
  * https://reactjs.org/docs/hooks-reference.html#useref
  * https://www.udemy.com/course/curso-de-reactjs-nextjs-completo-do-basico-ao-avancado/learn/lecture/24969452?start=15#content
*/
import P from 'prop-types';
import { useEffect, useMemo, useRef, useState } from 'react';
import './App.css';

const Post = ({ post, handleClick }) => {
  console.log('Filho, Renderizou!');
  return (
    <div className="post" key={post.id}>
      <h1 onClick={() => handleClick(post.title)}>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
  handleClick: P.func,
};

function App() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  const input = useRef(null);
  const contador = useRef(0);

  console.log('Pai foi Renderizado!');

  //component did mount
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((r) => r.json())
      .then((r) => setPosts(r));
  }, []);

  useEffect(() => {
    input.current.focus();
    console.log(input.current);
  }, [value]);

  useEffect(() => {
    contador.current++;
  }, []);

  const handleClick = (value) => {
    setValue(value);
  };

  return (
    <div className="App">
      <h5>Rendezou: {contador.current} vezes.</h5>
      <p>
        <input
          ref={input}
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </p>
      {useMemo(() => {
        return (
          posts.length > 0 &&
          posts.map((post) => {
            return <Post post={post} key={post.id} handleClick={handleClick} />;
          })
        );
      }, [posts])}

      {posts.length <= 0 && <p>Em busca...</p>}
    </div>
  );
}

export default App;
