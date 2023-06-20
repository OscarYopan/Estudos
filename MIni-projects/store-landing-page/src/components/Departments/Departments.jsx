export const Departments = () => {
  return (
    <div className="departments">
      <div className="department">
        <h2 className="department-title">{title}</h2>
        <img src={link} alt={title} />
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