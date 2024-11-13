import { HubbleImagesResponse, NewsResponseWithParams } from "@/utils/types";
import { ReactNode } from "react";

const Overview = ({ objects }: { objects: NewsResponseWithParams | HubbleImagesResponse }): ReactNode => {
	let number: number;
	// type guard :
	if ("total_count" in objects) {
		number = objects.total_count;
	} else {
		number = objects.response.count;
	}
	return <div className="my-6 text-xl">{number} matches</div>;
};
export default Overview;
