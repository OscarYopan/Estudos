import { useCallback, useEffect, useState } from 'react';

const useAsync = (asyncFunction, shouldRun) => {
  const [state, setState] = useState({
    result: null,
    error: null,
    status: 'idle',
  });