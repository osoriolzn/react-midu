import { useState, useEffect } from 'react'

export function useCatImage ({ fact }) {
  const [imageUrl, setimageUrl] = useState()

  useEffect(() => {
    if (!fact) return

    const threeFirstWord = fact.split(' ', 3).join(' ')

    fetch(`https://api.thecatapi.com/v1/images/search?RAND=${threeFirstWord}`)
      .then((res) => res.json())
      .then((response) => {
        const { url } = response[0]
        setimageUrl(url)
      })
  }, [fact])

  return { imageUrl }
}
