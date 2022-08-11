import React from 'react'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'

const ShareCertificate = () => {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/', { replace: true })
    }, 1000)
  }, [])

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <link rel="canonical" href={process.env.REACT_APP_APP_BASE_URL} />
        <meta name="description" content="quiz" />
        <meta property="og:title" content="15th august quiz." />
        <meta property="og:image" content="/assets/images/sagar_certificate.png" />
      </Helmet>
    </>
  )
}

export default ShareCertificate
