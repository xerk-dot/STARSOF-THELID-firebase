import { useLayoutEffect } from 'react';

const useDocumentTitle = (title) => {
  useLayoutEffect(() => {
    if (title) {
      document.title = title;
    } else {
      document.title = 'Starsof Thelid';
    }
  }, [title]);
};

export default useDocumentTitle;
