import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <>




    <div className="error-main">
      <div className="container">
        <div className="error-inner">
          <h1>404</h1>
          <p>Oops! That page is not found.</p>
          <div className="content-btn">
            <Link type="submit" to="/" className="button">Go To Home</Link>
          </div>
        </div>
      </div>
    </div>


    </>
  )
}

export default Error