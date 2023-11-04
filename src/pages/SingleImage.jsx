import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


function SingleImage() {
  const data = useContext(GlobalContext)
  const { id } = useParams()
  const url = `https://api.unsplash.com/photos/${id}?client_id=${
    import.meta.env.VITE_APP_ACCESS_KEY
  }`
  const { data: image, isPending, error } = useFetch(url)

  return (
    <div>
      {isPending && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {image && (
        <>
          <img src={image.urls.regular} alt={image.alt_description} height={500}/>
          <h2>Description:</h2>
          <p>{image.description || "No Description"}</p>
          <div>
          <span>Author:</span>
          <br />
          <img className='profile_image' src={image.user.profile_image.large} alt="" />
          </div>
          <hr />
          {image.likes && <h3>Likes: {image.likes}</h3>}
        </>
      )}
    </div>
  )
}

export default SingleImage
