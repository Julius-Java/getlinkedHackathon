import React from 'react'

const Alert = () => {
  return (
        <div className="bg-orange-50 border border-orange-200 text-sm text-orange-600 rounded-md p-4 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2" role="alert">
        <span className="font-bold">Warning</span> User is already registered
        </div>
  )
}

export default Alert