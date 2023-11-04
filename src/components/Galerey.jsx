import { Link } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalState'
import { useContext } from 'react'

function Galerey({ data: { results } }) {
  const { addNewImage } = useContext(GlobalContext)
  return (
    <div className="galerey">
      <ul>
        {results.map((image) => {
          return (
            <li key={image.id}>
              <Link to={`singlepage/${image.id}`}>
                <img
                  src={image.urls.regular}
                  alt={image.alt_description}
                  width={300}
                  height={300}
                />
              </Link>
              <button onClick={() => addNewImage(image)}>Like 💝</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Galerey
