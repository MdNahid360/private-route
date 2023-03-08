import React from 'react';
import {
  createBrowserRouter,
} from "react-router-dom";
import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import OrderReview from '../../pages/OrderReview/OrderReview';
import SignUp from '../../pages/SignUp/SignUp';
import Main from '../../shared/Main/Main';
import PrivetRout from '../PrivetRout';

export const route = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/orderReview',
                element : <PrivetRout><OrderReview></OrderReview></PrivetRout>
            },
            {
                path : '/login',
                element : <Login></Login>
            },
            {
                path : '/signUp',
                element : <SignUp></SignUp>
            },
        ]
    }
])