import React, {lazy, Suspense} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NotFound from './NotFound'
import {ErrorBoundary} from '../components/common/ErrorBoundary'
import BaseSkeleton from './Layouts/BaseSkeleton'

const BaseLayout = lazy(() => import('./Layouts/BaseLayout'))
const Login = lazy(() => import('./Login'))

export default function ProjectRoutes() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<BaseSkeleton />}>
        <Router>
          <Routes>
            <Route path="/" element={<BaseLayout />}>
              <Route index path="/login" element={<Login />} />
              <Route path="statement">
                <Route path="history" element={<Login />} />
                <Route path="request" element={<Login />} />
              </Route>
              <Route path="admin">
                <Route index path="history" element={<Login />} />
                <Route index path="reports" element={<Login />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </Suspense>
    </ErrorBoundary>
  )
}
