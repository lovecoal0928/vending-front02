import React, { useEffect, useState } from 'react'

export const useTime = (interval: number) => {
  const [time, setTime] = useState(Date.now())

  useEffect(() => {
    const timeoutId = setTimeout(() => setTime(Date.now()), interval)

    return () => {
      clearTimeout(timeoutId)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time])

  return time
}