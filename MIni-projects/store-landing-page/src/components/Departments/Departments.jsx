
import './departments.css'
import depGames from '../../assets/images/dep-games.png'

export const Departments = () => {
  return (
    <div className="departments">
      <div className="department" id='games-dep'>
        <h2 className="department-title">Games</h2>
      </div>

      <div className="department" id='eletronic-dep'>
        <h2 className="department-title">Computer</h2>
      </div>

      <div className="department" id='toys-dep'>
        <h2 className="department-title">Toys</h2>
      </div>

      <div className="department" id='toys-dep'>
        <h2 className="department-title">Home</h2>
      </div>

      <div className="department" id='pet-dep'>
        <h2 className="department-title">Pet</h2>
      </div>
    </div>
  )
}
