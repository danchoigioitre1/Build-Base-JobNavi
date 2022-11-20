import { useCallback, useState } from 'react'


export function useAsyncError(): (error: Error) => void {
 

  const [error, setError] = useState()
  return useCallback((error) => {
    setError(() => {
      
      throw error
    })
  }, [])
}