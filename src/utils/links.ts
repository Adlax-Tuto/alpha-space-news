export type Link = {
	ref: string;
	label: string;
};

export const links: Link[] = [
	{ ref: "/", label: "home" },
	{ ref: "/spacex", label: "spaceX" },
	{ ref: "/webb", label: "james webb" },
	{ ref: "/hubble", label: "hubble" },
	{ ref: "/news", label: "news" },
	{ ref: "/apod", label: "NASA's day photo" },
];
