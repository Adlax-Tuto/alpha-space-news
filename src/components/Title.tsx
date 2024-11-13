import { ReactNode } from "react";

const Title = ({ text }: { text: string }): ReactNode => {
	return (
		<div>
			<h2 className="my-6 text-5xl capitalize">{text}</h2>
		</div>
	);
};
export default Title;
