import { Button } from '@mui/material'
import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { BrowserRouter as Router } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { Spinner } from '@/components/Elements'
import { MainLayout } from '@/components/Layout'

const ErrorFallback = () => {
  return (
    <div
      className="text-red-500 w-screen h-screen flex flex-col justify-center items-center"
      role="alert"
  >
      <h2 className="text-lg font-semibold">Ooops, something went wrong :( </h2>
      <Button className="mt-4" onClick={() => window.location.assign(window.location.origin)}>
        Refresh
      </Button>
    </div>
  )
}

interface AppProviderProps {
  children: React.ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense
      fallback={
        <div className="flex items-center justify-center w-screen h-screen">
          <Spinner size="xl" />
        </div>
      }
      >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <RecoilRoot>
          <Router>
            <MainLayout>
              {children}
            </MainLayout>
          </Router>
        </RecoilRoot>
      </ErrorBoundary>

    </React.Suspense>
  )
}
