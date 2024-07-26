import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';

interface PaginationProps {
  totalPages: number
  currentPage: number
  onPageChange: (page: number) => void
}

export default function Pagination(props: PaginationProps) {
  const {
    currentPage,
    onPageChange,
    totalPages
  } = props

  return (
    <ResponsivePagination
      current={currentPage}
      total={totalPages}
      onPageChange={onPageChange}
    />
  );
}