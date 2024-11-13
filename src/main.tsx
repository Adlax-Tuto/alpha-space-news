import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Apod, ErrorMain, HomeLayout, Hubble, Landing, News, SingleHubble, SpaceX, Webb } from "./pages";
import { newsPageLoader } from "./pages/News";
import { ErrorElement } from "./components";
import { hubblePageLoader } from "./pages/Hubble";
import { apodPageLoader } from "./pages/Apod";
import { webbPageLoader } from "./pages/Webb";
import { spacexPageLoader } from "./pages/SpaceX";
import { LandingPageLoader } from "./pages/Landing";
import { singleHubblePageLoader } from "./pages/SingleHubble";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
		errorElement: <ErrorMain />,
		children: [
			{
				index: true,
				element: <Landing />,
				loader: LandingPageLoader,
				errorElement: <ErrorElement />,
			},
			{ path: "news", element: <News />, loader: newsPageLoader, errorElement: <ErrorElement /> },
			{ path: "webb", element: <Webb />, loader: webbPageLoader, errorElement: <ErrorElement /> },
			{
				path: "spacex",
				element: <SpaceX />,
				loader: spacexPageLoader,
				errorElement: <ErrorElement />,
			},
			{ path: "apod", element: <Apod />, loader: apodPageLoader, errorElement: <ErrorElement /> },
			{
				path: "hubble",
				element: <Hubble />,
				loader: hubblePageLoader,
				errorElement: <ErrorElement />,
			},
			{
				path: "hubble/:id",
				element: <SingleHubble />,
				loader: singleHubblePageLoader,
				errorElement: <ErrorElement />,
			},
		],
	},
]);

createRoot(document.getElementById("root")!).render(<RouterProvider router={router} />);
