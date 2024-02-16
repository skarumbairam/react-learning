import React, { Suspense, lazy, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Restaurant from "./components/Restaurant";
import UserInfoContext from "./utils/UserInfoContext";
//import TestClassComponent from "./components/ClassComponent"; loading from when goes to class component

// Code splitting, lazy loading

const TestClassComponent = lazy(() => import("./components/ClassComponent"));

const AppLayout = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // after Login check completes we get the value data.name = Senthil
    // setUserName({ loggedInUser: "Senthilkumar" });
    setUserName("Senthilkumar");
  }, []);
  console.log("userName", userName);
  return (
    <UserInfoContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div>
        <Header />
        <Outlet />
      </div>
    </UserInfoContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:restId",
        element: <Restaurant />,
      },
      {
        path: "/classcomponent",
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            <TestClassComponent />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
