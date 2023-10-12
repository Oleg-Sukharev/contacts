import { Link } from "react-router-dom"

const NotFoundPage = function () {
  return (
    <>
      <h1>
        404 - Not Found
      </h1>
      <Link to="/">Go to home page</Link>
    </>
  )
}

export default NotFoundPage;
