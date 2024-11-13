import { useLoaderData } from "react-router-dom";
import NewsLauncherHeader from "./NewsLauncherHeader";
import { LandingPageNewsApodHubbles } from "@/utils/types";
import NewsLauncherSquaredCards from "./NewsLauncherSquaredCards";
import NewsLauncherBubbledCards from "./NewsLauncherBubbledCards";

const NewsLauncher = () => {
	const { news } = useLoaderData() as LandingPageNewsApodHubbles;

	return (
		<article className="w-full py-12">
			<div className="align-element h-full">
				<NewsLauncherHeader />
				{news && <NewsLauncherSquaredCards news={news} />}
				{news && <NewsLauncherBubbledCards news={news} />}
			</div>
		</article>
	);
};
export default NewsLauncher;
