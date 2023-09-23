import React from 'react'

type alertInfoProps = {
  alertInfo: string
}

const Alert = ({alertInfo}: alertInfoProps) => {
  return (
        <div className="bg-orange-50 border border-orange-200 text-xs text-orange-600 rounded-md p-2 absolute top-14 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 lg:text-sm lg:w-40" role="alert">
        <span className="font-bold">Warning</span> {alertInfo}
        </div>
  )
}

export default Alert