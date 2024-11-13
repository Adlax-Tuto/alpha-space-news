import { LandingPageNewsApodHubbles } from "@/utils/types";
import { Link, useLoaderData } from "react-router-dom";
import Title from "./Title";
import { CirclePlay } from "lucide-react";
import CardsGrid from "./CardsGrid";

const HubbleLauncher = () => {
	const { hubbles } = useLoaderData() as LandingPageNewsApodHubbles;

	if (!hubbles) {
		return <>Problem while fetching data</>;
	}

	return (
		<article className="align-element w-full my-6">
			<div className="flex justify-between items-center">
				<Title text="hubble photos" />
				<div className="flex ">
					<p className="font-bold ml-auto mr-2">More photos</p>
					<Link to="hubble">
						<CirclePlay
							color="var(--clr-violet)"
							className="transition-all hover:scale-150"
						/>
					</Link>
				</div>
			</div>
			<CardsGrid mode="hubble" objects={hubbles} />
		</article>
	);
};
export default HubbleLauncher;
