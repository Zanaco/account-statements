import React from 'react'
import {withErrorBoundary, useErrorBoundary} from 'react-use-error-boundary'
import {DefaultProps} from '../../../types'
import ErrorPage from '../ErrorPage'

export const ErrorBoundary = withErrorBoundary(({children}: DefaultProps) => {
  const [error] = useErrorBoundary()

  if (error) {
    return (
      <ErrorPage
        refresh
        title="Network Error"
        message={
          'Failed to load the required resources. Please refresh the page to try again. ' +
          'If this issue persists please notify the administrator.'
        }
      />
    )
  }

  return <div>{children}</div>
})
