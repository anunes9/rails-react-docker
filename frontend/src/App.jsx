import React, { useEffect, useState } from 'react'
import './index.scss'

export const App = () => {
  const [healthCheck, setHealthCheck] = useState(null)

  useEffect(() => {
    healthCheckRequest().then((response) => setHealthCheck(response))
  }, [])

  const healthCheckRequest = async () => {
    const url = 'http://0.0.0.0:3000/api/health-check'
    const options = {
      method: 'GET',
    }

    const response = await fetch(url, options)
    return response.status === 200 ? 'API is up!' : 'API is down...'
  }

  return (
    <>
      <h1>Hello World!</h1>
      <p>{`API up: ${healthCheck}`}</p>
    </>
  )
}
