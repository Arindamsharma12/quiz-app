import { useEffect, useState } from "react"
import { io } from "socket.io-client"
import { CreateProblem } from "./CreateProblem";
import { QuizControls } from "./QuizControls";
export const Admin = ()=>{
  const [socket,setSocket] = useState<null | any>(null);
  const [quizId,setQuizId] = useState("");
  const [roomId,setRoomId] = useState("")
  useEffect(()=>{
    const socket = io('http://localhost:3000')
    setSocket(socket);
    socket.on("connect",()=>{
      console.log(socket.id)
      socket.emit("joinAdmin",{
        password:"ADMIN_PASSWORD"
      })
    })
  },[])
  if(!quizId){
    return <div>
    <input type="text" className="px-4 py-2 my-4  rounded-md shadow-sm focus:shadow-lg" onChange={(e)=>{setRoomId(e.target.value)}}/>
    <br></br>
    <button
    className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
    onClick={()=>{
      socket.emit("createQuiz",{
        roomId
      })
      setQuizId(roomId)
    }}>Create Room</button>
  </div>
  }
  return <div>
    <CreateProblem roomId={quizId} socket={socket}/>
    <QuizControls socket={socket} roomId={roomId}></QuizControls>
    </div>
}