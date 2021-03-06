import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faEye } from '@fortawesome/free-solid-svg-icons'
import Tooltip from './Tooltip'

export default function Card({ img, className="" }) {
  return (
    <div className={"card " + className}>   
      <div className='card__front-side'>
        <img className="card__image" src={img} alt=""/>

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