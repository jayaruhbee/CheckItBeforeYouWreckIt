import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import QuestionsComponent from "./components/Questions";
import Home from "./components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "questions/:category",
        element: <QuestionsComponent />,
      },
    ],
  },
]);

export default router;
