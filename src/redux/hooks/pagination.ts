import { useState, useMemo } from 'react';

import { PostProps } from '../../components/PostCard';

const usePagination = (data: PostProps[], itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = useMemo(() => {
    return Math.ceil(data.length / itemsPerPage);
  }, [data.length, itemsPerPage]);

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const displayedPosts = data.slice(start, end);

  return [
    displayedPosts,
    totalPages,
    currentPage,
    setCurrentPage
  ] as const;
};

export default usePagination;
