import EmptyState from '@/components/EmptyPage/EmptyPage';
import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
  const error = useRouteError()

  return (
    <>
      <EmptyState title="Something went wrong" />
      {import.meta.env.MODE !== "production" && error instanceof Error && (
        <>
          <pre>{error.message}</pre>
          <pre>{error.stack}</pre>
        </>
      )}
    </>
  )
}

export default ErrorPage;
