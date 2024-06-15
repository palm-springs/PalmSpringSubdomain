'use client';

import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

// 서버 측에서 계산한 isMobile 값을 initialValue로 설정
const useCheckMobile = (initialValue: boolean) => {
  const [isMobile, setIsMobile] = useState(initialValue);

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
