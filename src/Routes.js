// import React, { useEffect, lazy, Suspense } from "react";
// import { Route, Switch } from "react-router";
// import { scrollAnimators } from "./Animators/scrollAnimators";
// import "./Animators/scrollAnimators.css";
// import LoadingScreen from "./Containers/LoadingScreen";

// // const Events = lazy(() => import("./Pages/Events"));
// const LandingPage = lazy(() => import("./Pages/Landing"));

// export default function Body() {
//   useEffect(() => {
//     window.addEventListener("scroll", scrollAnimators);
//   }, []);
//   return (
//     <Switch>
//       <Suspense fallback={<LoadingScreen />}>
//         <div className="pages">
//           <Route path="/" exact component={LandingPage} />
//         </div>
//       </Suspense>
//     </Switch>
//   );
// }
