import {InteractionStatus} from '@azure/msal-browser'
import {useIsAuthenticated, useMsal} from '@azure/msal-react'
import React, {Suspense} from 'react'
import {ErrorBoundary} from '../../components/common/ErrorBoundary'
import BaseSkeleton from '../Layouts/BaseSkeleton'
import Login from '../Login'
import ProjectRoutes from '../Routes'

export default function AuthLoading() {
  const isAuthenticated = useIsAuthenticated()
  const {inProgress} = useMsal()
  const [isLoading, setIsLoading] = React.useState(false)

  React.useEffect(() => {
    setIsLoading(inProgress === InteractionStatus.None)
  }, [inProgress])

  if (isLoading) {
    return <BaseSkeleton />
  }

  return (
    <ErrorBoundary>
      <Suspense fallback={<BaseSkeleton />}>
        {isAuthenticated ? <ProjectRoutes /> : <Login />}
      </Suspense>
    </ErrorBoundary>
  )
}
