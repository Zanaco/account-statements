import React, {lazy, Suspense} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NotFound from './NotFound'
import {ErrorBoundary} from '../components/common/ErrorBoundary'
import BaseSkeleton from './layouts/BaseSkeleton'
import ContractException from './Admin/ContractException'

const BaseLayout = lazy(() => import('./layouts/BaseLayout'))
const Inbox = lazy(() => import('./Inbox'))

export default function ProjectRoutes() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<BaseSkeleton />}>
        <Router>
          <Routes>
            <Route path="/" element={<BaseLayout />}>
              <Route index path="/login" element={<Inbox />} />
              <Route path="statement">
                <Route path="history" element={<Inbox type="personal" />} />
                <Route path="request" element={<Inbox />} />
              </Route>
              <Route path="admin">
                <Route index path="history" element={<Inbox />} />
                <Route index path="reports" element={<Inbox />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </Suspense>
    </ErrorBoundary>
  )
}
