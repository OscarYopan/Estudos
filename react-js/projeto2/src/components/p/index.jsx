import { useContext } from 'react';

// eslint-disable-next-line
export const P = () => {
  const theContext = useContext(GlobalContext);
  const {
    contextState: { body, counter },
    setContextState,
  } = theContext;
  return (
    <p
      onClick={() => setContextState((s) => ({ ...s, counter: s.counter + 1 }))}
    >
      {body} {counter}
    </p>
  );
};
