import { useEffect, useState } from 'react';

import { getWeb3 } from './web3-utils';

export const useWeb3 = () => {
  const [loading, setLoading] = useState(true);
  const [web3, setWeb3] = useState();
  useEffect(() => {
    // getWeb3 needs to run inside a useEffect because it references the window object (Next.js)
    getWeb3().then((web3Instance) => {
      setWeb3(web3Instance);
      setLoading(false);
    });
  }, []);
  return { loading, web3 };
};
