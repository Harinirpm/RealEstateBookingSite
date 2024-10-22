import React, {children, lazy, Suspense} from 'react';
import Layout from "../components/Layout/Layout";
import Companies from "../pages/Companies/Companies";
const Home = lazy(() => import('../pages/Home'));
const Routes = [
{
    path:'/',
    element:<Layout />,
    children: [
        {
            path: "/",
            element: (
                <Suspense fallback={<div>Loading...</div>}>
                    <Home />
                    </Suspense>
            )
        },
        {
            path: "/companies",
            element: (
                <Suspense fallback={<div>Loading...</div>}>
                    <Companies />
                </Suspense>
            )
        }
    ]
},
{
    path:'*',
    element:<h1>404 - page not found</h1>,
},

];
export default Routes;