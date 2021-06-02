import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import socketClient from 'socket.io-client'
// import { Container } from './styles';

const ServiceLogList: React.FC = () => {
  const [serviceLogs, setServiceLog] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getServiceLog = async () => {
      try {
        setIsLoading(true)
        const {
          data: { serviceLog }
        } = await api.post('/serviceLogs')
        setServiceLog(serviceLog)
        setIsLoading(false)
        socketListener()
      } catch (error) {
        console.log(error)
        setIsLoading(false)
      }
    }
    getServiceLog()
  }, [])

  const socketListener = () => {
    try {
      const socket = socketClient('http://localhost:3333/')
      socket.on('newLog', (log: []) => {
        setServiceLog(prevState => [...prevState, ...log])
      })
      console.log(socket)
    } catch (error) {
      console.log(error)
    }
  }

  if (isLoading) {
    return <p>loading</p>
  }

  return (
    <>
      {serviceLogs.map(service => (
        <div>
          <p>{JSON.stringify(service)}</p>
        </div>
      ))}
    </>
  )
}

export default ServiceLogList
