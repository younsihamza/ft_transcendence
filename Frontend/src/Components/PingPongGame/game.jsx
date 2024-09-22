import Ball from "./ball";
import Table from "./table";
import Walls from "./walls";
import { useContext, useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import Paddle from "./paddle";
import {  useKeyboardControls} from "@react-three/drei";
import  { useAuth } from "../../context/AuthContext";
import { useLocation } from "react-router";
import GameContext from "../../context/gameContext";


function Game(props)
{
  const  {score1, score2, beforeStart,waiting, waitingStatus}  = useContext(GameContext)
  const {tokens,username} = useAuth()
  const [socket,setsocket] = useState(null)
  const BallRef =  useRef()
  const MyPaddleRef= useRef()
  const [start, setStart] = useState(false)
  const  OtherPaddleRef = useRef()
  const location = useLocation()
  const  [,get] = useKeyboardControls()
  useEffect(() => {
  let wsUrl = null 
  if (location.state.isonline == true)
      wsUrl = `ws://localhost/ws/game/pingpong/${location.state.gameid}/?token=${tokens.access}`;
  else
      wsUrl = `ws://localhost/ws/game/pingpong/offline/${location.state.gameid}/?token=${tokens.access}`;
  console.log("websocket url :",wsUrl)
  const ws = new WebSocket(wsUrl);
  ws.onopen = () => {
    console.log("message: connection between the client and the server started");
    setsocket(ws);
  }
  props.handleWin(false, false, location.state.gameid);
  ws.onmessage = async (msg) => {
    const hold = await JSON.parse(msg.data);
    const { type, ball_position, paddle_one_position, paddle_two_position, winner, iswaiting, status, currentSecond, message} = hold;
    console.log("game data : ",hold)
    switch (type) {
      case 'game.start':
        setStart(() => true);
        break;
      case 'game.update':
        BallRef.current.position.x = ball_position[0];
        BallRef.current.position.z = ball_position[2];
        MyPaddleRef.current.position.x = paddle_one_position.x;
        OtherPaddleRef.current.position.x = paddle_two_position.x;
        if (location.state.isonline == true){
          score1.current.innerText = '0' + hold[username];
          score2.current.innerText = '0' + hold['other'];
        }else{
          score1.current.innerText = '0' + hold['score2'];
          score2.current.innerText = '0' + hold['score1'];
        }
        break;
      case 'game.winner':
        props.handleWin(winner === username, true, location.state.gameid);
        break;
      case 'game.waiting':
        props.handleWaiting(() => iswaiting);
        if (iswaiting && (status === 'reconnect' || status === 'pause')) {
          waiting.current.innerText = currentSecond;
          waitingStatus.current.innerText = message;
        }
        break;
      case 'before.start':
        console.log(beforeStart)
        console.log(props)
        if (props.beforeStartState == false){
          console.log("change state to  true")
          props.handleBefore(true)
        }
        if(beforeStart.current)
          beforeStart.current.innerText = hold.message
        if (hold.time == 1)
          props.handleBefore(false)
        break;
    }
  }

  const handleClick = (e) => {
    console.log(e);
    if (e.code === 'KeyP') {
      ws.send(JSON.stringify({ "type": "pause", 'username': username }));
    } else if (e.code === 'Space' && start == false) {
      ws.send(JSON.stringify({ "type": "start" }));
    }
  }

  window.addEventListener('keydown', handleClick);
  return () => {
    ws.close();
    window.removeEventListener('keydown', handleClick);
  }
}, [location.state.gameid]);

  useFrame(()=>{
      let move = get()
      if(move.left || move.down)
        socket.send(JSON.stringify({"type":"move_paddle","move": "left"}))
      if (move.right || move.up)
        socket.send(JSON.stringify({"type":"move_paddle","move": "right"}))
      if(move.leftOther || move.upOther)
        socket.send(JSON.stringify({"type":"move_paddle_two","move": "left"}))
      if (move.rightOther || move.downOther)
        socket.send(JSON.stringify({"type":"move_paddle_two","move": "right"}))
  })
    return (
      <>
        <Table/>
        <Paddle ref={MyPaddleRef} position={[1, 0.1, 1.92]}/>
        <Paddle ref={OtherPaddleRef} position={[1, 0.1, -1.92]}/>
        <Ball ref={BallRef}  position={[0,0.1,0]}/>
        <Walls/>
      </>
    )
}
export default Game