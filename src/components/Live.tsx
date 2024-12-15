import { useNavigate } from "react-router-dom"

const Live = () => {
    const navigate=useNavigate();
    const handleClick=()=>{
        navigate("/Live")
    }
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button onClick={handleClick} className="bg-green-300 text-black rounded-full p-3 shadow-lg hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500  focus:ring-offset-2 focus:ring-offset-white">
        Join LiveStreaming
      </button>
    </div>
  )
}

export default Live
