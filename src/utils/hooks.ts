import { useState, useLayoutEffect } from 'react'

const useFetch = <T>(uri: string) => {
    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<Error | null>(null)

    useLayoutEffect(() => {
        async function fetchData() {
            try {
                setLoading(true)
                const response = await fetch(uri)
                if (!response.ok) {
                    setLoading(false)
                    setError(
                        new Error(
                            `Something went wrong. Uri: ${uri} did not return anything.`
                        )
                    )
                }

                const responseData = await response.json()

                if (responseData) {
                    setData(responseData)
                    setLoading(false)
                } else {
                    setLoading(false)
                    setError(new Error('Something went wrong.'))
                }
            } catch (error) {
                setLoading(false)
                setError(new Error(`Something went wrong. Error: ${error}`))
            }
        }

        fetchData()
    }, [uri])

    return { data, loading, error }
}

export default useFetch
