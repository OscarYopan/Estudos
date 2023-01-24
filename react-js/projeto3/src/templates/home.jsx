/* eslint-disable */

const useFetch = () => {
  console.log('Meu Hook funciona');

  return [123, false]
}

export const Home = () => {
  const [result, loading] = useFetch()

  return <h1><Oi></Oi></h1>
}