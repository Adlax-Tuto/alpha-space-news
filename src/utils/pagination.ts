type BuildUrlProps = {
	page: number;
	pathname: string;
	search: string;
};

export const buildUrl = ({ page, pathname, search }: BuildUrlProps): string => {
	const searchParams = new URLSearchParams(search);
	searchParams.set("page", page.toString());
	const url = `${pathname}?${searchParams.toString()}`;
	return url;
};

type BuildPrevAndNextUrlsProps = {
	page: number;
	pathname: string;
	search: string;
	lastPage: number;
};

export const buildPrevAndNextUrls = ({
	page,
	pathname,
	search,
	lastPage,
}: BuildPrevAndNextUrlsProps): { prevUrl: string; nextUrl: string } => {
	let prevPage = page - 1;
	if (prevPage < 1) prevPage = lastPage;
	const prevUrl = buildUrl({ page: prevPage, pathname, search });
	let nextPage = page + 1;
	if (nextPage >= lastPage) nextPage = 1;
	const nextUrl = buildUrl({ page: nextPage, pathname, search });
	return { prevUrl, nextUrl };
};

// page : 7
// pathname : /news
// search : ?term=hubble
