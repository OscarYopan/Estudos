//Hooks - UseMemo
/*
  - Mesma função de 'UseCallBack';
  - Nesse caso ele salva valores;
  - Recebe uma função;
  - Recebe um array com dependencias;
  *https://www.udemy.com/course/curso-de-reactjs-nextjs-completo-do-basico-ao-avancado/learn/lecture/24960210?start=15#overview
*/
import P from 'prop-types';
import { useEffect, useState } from 'react';
import './App.css';

const post = ({ post }) => {
  return (
    <div className="post" key={post.id}>
      <h1>{post.title}</h1>
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
};

function App() {
  const [posts, setPosts] = useState([]);

  console.log('Pai foi Renderizado!');

  useEffect(() => {
    setTimeout(function () {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((r) => r.json())
        .then((r) => setPosts(r));
    }, 5000);
  }, []);

  return (
    <div className="App">
      {posts.length > 0 &&
        posts.map((post) => {
          return <Post post={post} key={post.id} />;
        })}

      {posts.length <= 0 && <p>Em busca...</p>}
    </div>
  );
}

export default App;

// import P from 'prop-types';
// import { useCallback, useMemo, useState } from 'react';
// import './App.css';
// import React from 'react';

// const Button = ({ incrementButton }) => {
//   console.log('Filho');
//   return <button onClick={() => incrementButton(1)}>+</button>;
// };

// Button.propTypes = {
//   incrementButton: P.func,
// };

// function App() {
//   const [counter, setCounter] = useState(0);

//   //UseCallBack - Formato:
//   const incrementCounter = useCallback((num) => {
//     setCounter((c) => c + num);
//   }, []);

//   console.log('Pai');

//   const btn = useMemo(() => {
//     return <Button incrementButton={incrementCounter} />;
//   }, [incrementCounter]);

//   return (
//     <div className="App">
//       <h1>Contador: {counter}</h1>
//       {btn}
//     </div>
//   );
// }
