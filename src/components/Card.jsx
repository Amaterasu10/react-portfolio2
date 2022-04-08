export default function Card(props) {
  return (
    <div className="card">
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
