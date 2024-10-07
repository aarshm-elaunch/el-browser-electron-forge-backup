import { useEffect } from 'react';
import throttle from 'lodash/throttle';

interface ScrollToBottomOptions {
  threshold?: number;
  throttleTime?: number;
}

const useScrollToBottom = (
  ref: React.RefObject<HTMLDivElement>,
  onScrollEnd: () => void,
  options: ScrollToBottomOptions = {}
) => {
  const { threshold = 5, throttleTime = 200 } = options;

  useEffect(() => {
    const handleScroll = throttle(() => {
      const { scrollTop, scrollHeight, clientHeight } = ref.current!;
      if (scrollTop + clientHeight >= scrollHeight - threshold) {
        onScrollEnd();
      }
    }, throttleTime);

    const currentRef = ref.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', handleScroll);
      }
    };
  }, [ref, onScrollEnd, threshold, throttleTime]);
};

export default useScrollToBottom;
