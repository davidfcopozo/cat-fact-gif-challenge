import React, { useEffect, useState } from 'react'
import useFetch from '../hook/useFetch';

//http://api.giphy.com/v1/gifs/search?q=${words}&api_key=03MKoZww82GKbkgxyT49oNrC37l3AEML&limit=5

const Giphy = ({facts}) => {
  const words = facts?.split(" ").slice(0, 3).join("+"); 
  const [data, fetchData]=useFetch();
  const [gif, setGif]=useState();

  useEffect(()=> {
    const apiCall = async() => {
      await fetchData(`http://api.giphy.com/v1/gifs/search?q=${words}&api_key=03MKoZww82GKbkgxyT49oNrC37l3AEML&limit=5`)
    }
    apiCall()
  }, [words])
  
  useEffect(()=> {
    setGif(data);
  }, [data])

  return (
    <div>
      {gif && 
      <img key={gif["data"][0]?.id} src={gif["data"][0]?.images.downsized.url} alt={gif["data"][0]?.title} />}
    </div>

  )
}

export default Giphy