import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRotateLeft, faCode, faEye } from '@fortawesome/free-solid-svg-icons'
import { useState} from 'react'
import Tooltip from './Tooltip'

export default function Card(props) {
  function toggleFlip() {
    setFlipped(flipped => !flipped)
    console.log(flipped)
  }
  const [flipped, setFlipped] = useState(false);
  return (
    <div className="card">   
      <div className='card__front-side'>
        <img className="card__image" src={props.img} />

        <h2 className="card__title">title</h2>

        <div className="card__description">
            <p className="card__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate enim error, culpa ad debitis odit quisquam molestias veniam, dicta blanditiis maiores repellendus? 
            </p>
        </div>
      </div>

      <div className="card__overlay">
        <div className="card__overlay-content">

          <Tooltip  className="card__overlay-content-tooltip bordered" pos="top" tip="code">
            <FontAwesomeIcon icon={ faCode } className="FAIcon card__icon" />
          </Tooltip>

          <Tooltip className="card__overlay-content-tooltip bordered" pos="top" tip="visit">
            <FontAwesomeIcon icon={ faEye } className="FAIcon card__icon" />
          </Tooltip>

        </div>
      </div>
    </div>
  )
}

function Front(props) {
  return (
    <div className='card__front-side'>
      <img className="card__image" src={props.img} />

      <h2 className="card__title">title</h2>

      <div className="card__description">
          <p className="card__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate enim error, culpa ad debitis odit quisquam molestias veniam, dicta blanditiis maiores repellendus? 
          </p>
      </div>
    </div>
  )
}

function Back() {
  return (
    <div className="card__back-side">
      <FontAwesomeIcon icon={ faArrowRotateLeft } />
    </div>
  )
}


