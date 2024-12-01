export const QuizControls = ({socket, roomId}: {socket: any, roomId: string}) => {
  return <div>
      Quiz controls
      <button 
      className="px-4 py-2 m-4 text-white bg-red-500 rounded hover:bg-gray-600"
      onClick={() => {
          socket.emit("next", {
              roomId
          })
      }}>Next problem</button>
  </div>
}