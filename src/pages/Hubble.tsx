import { CardsGrid, Filters, Overview, PaginationContainer, Title } from "@/components";
import { objectsPerPage } from "@/utils/constants";
import { datastroCustomFetch } from "@/utils/customFetch";
import { FiltersParams, HubbleImagesResponse, HubbleImagesResponseWithParams } from "@/utils/types";
import { LoaderFunction, useLoaderData } from "react-router-dom";

const hubbleParams = {
	order_by: "photo_date_taken desc",
	limit: objectsPerPage,
};

export const hubblePageLoader: LoaderFunction = async ({ request }): Promise<HubbleImagesResponseWithParams | null> => {
	try {
		const params: FiltersParams = Object.fromEntries([...new URL(request.url).searchParams.entries()]);
		const formattedParams = {
			where: params.term ? `photo_title like "${params.term}"` : "",
			offset: params.page ? objectsPerPage * (parseFloat(params.page) - 1) : 0,
			...hubbleParams,
		};
		const response = await datastroCustomFetch.get<HubbleImagesResponse>("", { params: formattedParams });
		return { response: response.data, params };
	} catch (error) {
		/* eslint-disable-next-line no-console */
		console.log(error);
		return null;
	}
};

const Hubble = () => {
	const data = useLoaderData() as HubbleImagesResponseWithParams;
	const { response, params } = data;

	return (
		<section className="section">
			<Title text="Hubble telescope photos" />
			<Filters term={params.term} mode="hubble" key={params.term} />
			<Overview objects={response} />
			<CardsGrid objects={response.results} mode="hubble" />
			<PaginationContainer />
		</section>
	);
};
export default Hubble;
