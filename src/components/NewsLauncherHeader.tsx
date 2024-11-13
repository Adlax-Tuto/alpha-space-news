import { Link } from "react-router-dom";
import Title from "./Title";
import { CirclePlay } from "lucide-react";

const NewsLauncherHeader = () => {
	return (
		<div className="flex justify-between items-center">
			<Title text="recent news" />
			<p className="font-bold ml-auto mr-2">More news</p>
			<Link to="news">
				<CirclePlay color="var(--clr-violet)" className="transition-all hover:scale-150" />
			</Link>
		</div>
	);
};
export default NewsLauncherHeader;
