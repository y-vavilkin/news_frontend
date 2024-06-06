import { useMemo, useState } from 'react';

import { PostProps } from '../components/PostCard';

const usePagination = (data: PostProps[], itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const displayedPosts = useMemo(() => {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return data.slice(begin, end);
  }, [currentPage, data, itemsPerPage]);

  return [
    displayedPosts,
    totalPages,
    currentPage,
    setCurrentPage
  ] as const;
};

export default usePagination;
