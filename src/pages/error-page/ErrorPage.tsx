import { useRouteError } from "react-router-dom"

const ErrorPage = function () {
  const error = useRouteError()

  return (
    <>
      <h1>Something went wrong</h1>
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
