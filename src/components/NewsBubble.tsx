import { News } from "@/utils/types";
import { Link } from "react-router-dom";

const NewsBubble = ({ news }: { news: News }) => {
	const { image_url, title, news_site, url } = news;
	return (
		<Link to={url} target="_blank">
			<div className="grid grid-cols-3 p-1 h-full">
				<div className="col-span-1 justify-self-center self-center">
					<img
						src={image_url}
						alt="card-img"
						className="h-[80px] w-[80px] rounded-full object-cover p-0"
					/>
				</div>
				<div className=" col-span-2 justify-self-start self-center">
					<p className="leading-4 font-bold text-sm">{title}</p>
					<p className="mt-2">{news_site}</p>
				</div>
			</div>
		</Link>
	);
};
export default NewsBubble;
