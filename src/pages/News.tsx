import { CardsGrid, Filters, Overview, PaginationContainer, Title } from "@/components";
import { objectsPerPage } from "@/utils/constants";
import { snapiCustomFetch } from "@/utils/customFetch";
import { FiltersParams, NewsResponse, NewsResponseWithParams } from "@/utils/types";
import { LoaderFunction, useLoaderData } from "react-router-dom";

const newsParams = {
	news_site_exclude: "SpacePolicyOnline.com",
	limit: 20,
	ordering: "date",
};

export const newsPageLoader: LoaderFunction = async ({ request }): Promise<NewsResponseWithParams | null> => {
	try {
		const params: FiltersParams = Object.fromEntries([...new URL(request.url).searchParams.entries()]);
		const formattedParams = {
			search: params.term ? params.term : "",
			offset: params.page ? objectsPerPage * (parseFloat(params.page) - 1) : 0,
			...newsParams,
		};
		const response = await snapiCustomFetch.get<NewsResponse>("", {
			params: formattedParams,
		});
		return { response: response.data, params };
	} catch (error) {
		/* eslint-disable-next-line no-console */
		console.log(error);
		return null;
	}
};

const News = () => {
	const data = useLoaderData() as NewsResponseWithParams;
	const { response, params } = data;

	return (
		<section className="section">
			<Title text="All news" />
			<Filters term={params.term} mode="news" key={params.term} />
			<Overview objects={data} />
			<CardsGrid objects={response.results} mode="news-page" />
			<PaginationContainer />
		</section>
	);
};
export default News;
