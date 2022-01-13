import React, { FunctionComponent } from 'react'
import { Routes, Route } from "react-router-dom";
import { withAuth } from '@src/services/authHOC'
import Layout from '@src/components/layout'
import HomeView from '@src/views/home'
import AccountView from '@src/views/account'
import Login from '@src/views/login'
import ErrorView from '@src/views/error'

/**
 * ROUTER
 * Route the app views
 */
const Router:FunctionComponent = () => ( 
  <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={withAuth({ view: HomeView, reverse: true, redirectTo: '/account'})} />
      <Route path="/log" element={withAuth({ view: Login, reverse: true, redirectTo: '/account' })} />
      <Route path="/account" element={withAuth({ view: AccountView, redirectTo: '/log' })} /> 
      <Route path="*" element={<ErrorView />} />
    </Route>
  </Routes>
)

export default Router