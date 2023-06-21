
import './departments.css'
import depGames from '../../assets/images/dep-games.png'

export const Departments = () => {
  return (
    <div className="departments">
      <div className="department games-dep">
        <h2 className="department-title"><h2>Games</h2></h2>
      </div>

      <div className="department computer-dep">
        <h2 className="department-title"><h2>Games</h2></h2>
      </div>

      <div className="department eletronic-dep">
        <h2 className="department-title"><h2>Games</h2></h2>
      </div>

      <div className="department toys-dep">
        <h2 className="department-title"><h2>Games</h2></h2>
      </div>
    </div>
  )
}


/*
{people.map((person) => {
  return <Person key={person.id} {...person}/>
})}
*/


/*
  return (
  <article className='person'>
    <img src={image} alt={name} className='img' />
    <div>
      <h4>{name}</h4>
      <p>{age} years</p>
    </div>
  </article>
  )
*/