import { buildPrevAndNextUrls, buildUrl } from "@/utils/pagination";
import { HubbleImagesResponseWithParams, NewsResponseWithParams } from "@/utils/types";
import { ReactNode } from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "./ui/pagination";
import { objectsPerPage } from "@/utils/constants";

const PaginationContainer = () => {
	const { response } = useLoaderData() as HubbleImagesResponseWithParams | NewsResponseWithParams;
	const { pathname, search } = useLocation();
	const searchParams = new URLSearchParams(search);

	const pageFromURL: string | null = searchParams.get("page");
	const firstPage = 1;

	let activePage: number;
	if (!pageFromURL) {
		activePage = 1;
	} else {
		activePage = parseFloat(pageFromURL);
	}

	let objectsInTotal: number;
	if ("total_count" in response) {
		objectsInTotal = response.total_count;
	} else {
		objectsInTotal = response.count;
	}

	let lastPage: number;
	if (objectsInTotal === 0) {
		lastPage = 0;
	} else if (objectsInTotal % objectsPerPage === 0) {
		lastPage = objectsInTotal / objectsPerPage;
	} else {
		lastPage = Math.floor(objectsInTotal / objectsPerPage) + 1;
	}

	const { prevUrl, nextUrl } = buildPrevAndNextUrls({ page: activePage, pathname, search, lastPage });

	const buildDots = (key: string): ReactNode => {
		return (
			<PaginationItem key={key}>
				<PaginationEllipsis></PaginationEllipsis>
			</PaginationItem>
		);
	};

	const buildBtn = ({ page, isActive }: { page: number; isActive: boolean }): ReactNode => {
		const url = buildUrl({ page, pathname, search });
		return (
			<PaginationItem key={page}>
				<PaginationLink to={url} isActive={isActive} size="default">
					{page}
				</PaginationLink>
			</PaginationItem>
		);
	};

	const buildContent = (): ReactNode[] => {
		const pages: ReactNode[] = [];
		//first page
		pages.push(buildBtn({ page: firstPage, isActive: activePage === firstPage }));
		//ellips
		if (activePage > 2) {
			pages.push(buildDots("dots-1"));
		}
		//active page
		if (activePage !== firstPage && activePage !== lastPage) {
			pages.push(buildBtn({ page: activePage, isActive: activePage === activePage }));
		}
		//ellips
		if (activePage < lastPage - 1) {
			pages.push(buildDots("dots+1"));
		}
		//last page
		pages.push(buildBtn({ page: lastPage, isActive: activePage === lastPage }));
		return pages;
	};

	if (lastPage < 2) {
		return null;
	}

	return (
		<Pagination>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious to={prevUrl} size={"default"}></PaginationPrevious>
				</PaginationItem>
				{buildContent()}
				<PaginationItem>
					<PaginationNext to={nextUrl} size={"default"}></PaginationNext>
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
};
export default PaginationContainer;
