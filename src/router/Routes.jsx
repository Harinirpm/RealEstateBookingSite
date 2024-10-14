import App from "../App";
import React, {children, lazy, Suspense} from 'react';
import Layout from "../components/Layout/Layout";

const Home = lazy(() => import('../pages/Home'));

const Routes = [
{
    path:'/',
    element:<Layout />,
    children: [
        {
            path: "/",
            element: (
                <Suspense fallback={<div>Loding...</div>}>
                    <Home />
                    </Suspense>
            )
        },

    ]
},
{
    path:'*',
    element:<h1>404 - page not found</h1>,
},

];
export default Routes;