'use client';

import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const useCheckMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  const mobile = useMediaQuery({
    query: '(max-width:768px)',
  });
  useEffect(() => {
    if (mobile) {
      setIsMobile(mobile);
    } else {
      setIsMobile(false);
    }
  }, [mobile]);
  return isMobile;
};

export default useCheckMobile;
