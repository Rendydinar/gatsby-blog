import React from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap' // import component Pagination dari reactstrap

const PaginationLinks = ({currentPage, numberOfPages}) => {
	const isFirst = currentPage === 1 // variabel untuk menguji apakah ini adalah halaman pertama, berfungsi untuk membuat logic pagination next, prev
	const isLast = currentPage === numberOfPages // variabel untuk menguji apakah ini adalah halaman terakhir, berfungsi untuk membuat logic pagination next, prev
	const previousPage = currentPage - 1 === 1 ? '/' : '/page/' + (currentPage - 1).toString() // variabel untuk membuat logic apakah kita bisa melakukan pagination secara previous(berpindah ke halaman sebelumya)
	const nextPage = '/page/' + (currentPage + 1).toString() // variabel untuk membuat logic apakah kita bisa melakukan pagination secara next(berpindah ke halaman selanjutnya)

	return (
		<Pagination aria-label="Page navigation example">
			{isFirst ? (
				<PaginationItem disabled>
					<PaginationLink previous href="/"></PaginationLink>
				</PaginationItem>
			) : (
				<PaginationItem>
					<PaginationLink previous href={previousPage}></PaginationLink>
				</PaginationItem>
			)}
			{Array.from({ length: numberOfPages }, (_, i) => currentPage === i + 1 ? (
				<PaginationItem active key={`page-number${i + 1}`}>
					<PaginationLink href={`/${i === 0 ? '' : 'page/' + (i + 1)}`}>
						{i + 1}
					</PaginationLink>
				</PaginationItem>								
			) : (
				<PaginationItem key={`page-number${i + 1}`}>
					<PaginationLink href={`/${i === 0 ? '' : 'page/' + (i + 1)}`}>
						{i + 1}
					</PaginationLink>
				</PaginationItem>										
			))}
			{isLast ? (
				<PaginationItem disabled>
					<PaginationLink next href={nextPage}></PaginationLink>
				</PaginationItem>				
			) : (
				<PaginationItem>
					<PaginationLink next href={nextPage}></PaginationLink>
				</PaginationItem>				
			)}
		</Pagination>
	)
}

export default PaginationLinks