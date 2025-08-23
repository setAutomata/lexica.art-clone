import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Layout from "./components/layout/Layout";
import Home from "./components/pages/home/Home";
import History from "./components/pages/history/History";
import Likes from "./components/pages/likes/Likes";
import Account from "./components/pages/account/Account";
import Docs from "./components/pages/docs/Docs";
import Error from "./components/pages/error/Error";
import Aperture from "./components/pages/aperture/Aperture";
// import fetchImages from "./request/fetchImages";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        // loader: async () => {
        //   await queryClient.prefetchQuery({
        //     queryKey: ["image"],
        //     queryFn: fetchImages,
        //   });
        // },
      },
      { path: "aperture", element: <Aperture /> },
      { path: "history", element: <History /> },
      { path: "likes", element: <Likes /> },
      { path: "account", element: <Account /> },
      { path: "docs", element: <Docs /> },
      { path: "*", element: <Error /> },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
