import React from 'react'
import { toast } from 'react-toastify'

interface IToastProps {
  message: string
  type: 'success' | 'info' | 'error' | 'warning'
}

export const showToast = ({
  message = 'hello toast',
  type = 'success'
}: IToastProps): React.ReactText => {
  return (toast[type] || toast.info)(message)
}
