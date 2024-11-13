import { News } from "@/utils/types";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Link } from "react-router-dom";

const NewsCard = ({ news, classname }: { news: News; classname?: string }) => {
	const { image_url, title, news_site, url } = news;
	return (
		<Card className={`${classname} relative text-white border-0`}>
			<Link to={url} target="_blank">
				<CardHeader className="absolute top-1 left-1 p-0 capitalize">{news_site}</CardHeader>
				<CardContent className="h-full w-full p-0">
					<img src={image_url} alt="card-img" className="h-full w-full object-cover" />
				</CardContent>
				<CardFooter className="absolute bottom-0 p-2 font-extrabold text-xl leading-5">
					{title}
				</CardFooter>
			</Link>
		</Card>
	);
};
export default NewsCard;
