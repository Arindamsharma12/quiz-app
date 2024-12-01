import { useState } from "react";

export const CreateProblem = ({socket,roomId}:{socket:any;roomId:string}) => {
  const [title, setTitle] = useState("");
  const [description,setDescription] = useState("")
  const [answer,setAnswer] = useState(0)
  const [options, setOptions] = useState([
    {
      id: 0,
      title: "",
    },
    {
      id: 1,
      title: "",
    },
    {
      id: 2,
      title: "",
    },
    {
      id: 3,
      title: "",
    },
  ]);
  return (
    <div>
      Create Problem
      Title = <input
        type="text"
        className="px-4 py-2 my-4  rounded-md shadow-sm focus:shadow-lg"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      ></input>
      <br/><br/>
      Description = <input
        type="text"
        className="px-4 py-2 my-4  rounded-md shadow-sm focus:shadow-lg"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      ></input>
      <br></br>
      {[0, 1, 2, 3].map((optionId) => (
        <div>
          {optionId}
          <input type="radio" checked={optionId === answer} className="px-4 py-2 my-4 mx-4 rounded-md shadow-sm focus:shadow-lg"
          onChange={()=>{
            setAnswer(optionId)
          }}></input>
          <input
            type="text"
            onChange={(e) => {
              setOptions((options) =>
                options.map((x) => {
                  if (x.id === optionId) {
                    return {
                      ...x,
                      title: e.target.value,
                    };
                  }
                  return x;
                })
              );
            }}
          ></input>
          <br />
        </div>
      ))}
      <button 
      className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
      onClick={()=>{
      socket.emit("createProblem",{
        roomId,
        problem:{
          title,
          description,
          options,
          answer,
        }
      })
    }}>Add Problem</button>
    </div>
  );
};
