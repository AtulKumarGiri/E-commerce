import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FrontendLayout from './layouts/frontend/FrontendLayout'

function PublicRoute() {
  return (
        <Routes>
            <Route path="/*" element={<FrontendLayout/> } />
        </Routes>
    )

}

export default PublicRoute