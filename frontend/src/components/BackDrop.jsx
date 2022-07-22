import './backDrop.css'

const BackDrop = ({ show, click }) => {
  return (
    show && (
      <div className="backdrop" onClick={click}>
        BackDrop
      </div>
    )
  )
}

export default BackDrop
