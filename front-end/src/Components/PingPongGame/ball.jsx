import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useRef } from "react";
import { FaceControls, useKeyboardControls } from "@react-three/drei";

export default function Ball()
{

    const  [, get] = useKeyboardControls()
    const ref =  useRef()
    const refs= useRef()
    const  OtherPaddleRef = useRef()
    const positionBall = useRef({vx: 0.05, vz: 0.05, x: 0, z: 0.1 })
    useFrame(()=>{
        const move = get()
        const positionPaddle  = refs.current.position
        let x = positionPaddle.x
        if(move.left)
            x -= 0.04
        if (move.right)
            x += 0.04
        if(x >0.25 && x < 1.75)
                refs.current.position.x  = x;

        const positionOtherPaddle = OtherPaddleRef.current.position
        let OtherX = positionOtherPaddle.x
        if(OtherX - positionBall.current.x <=0.1  &&  positionBall.current.z < 0.2)
            OtherX += 0.04
        if(OtherX - positionBall.current.x >=-0.1  &&  positionBall.current.z < 0.2)
            OtherX -= 0.04
        if(move.leftOther)
            OtherX -= 0.04
        if(move.rightOther)
            OtherX += 0.04
        if(OtherX >0.25 && OtherX < 1.75)
            OtherPaddleRef.current.position.x = OtherX

        positionBall.current.x += positionBall.current.vx 
        positionBall.current.z += positionBall.current.vz
        if( positionBall.current.z >= 2.8 || positionBall.current.z <= -2.8 )
            {
                positionBall.current.z = 0
                if(positionBall.current.vz < 0)
                    positionBall.current.vz = 0.05
                else 
                    positionBall.current.vz = -0.05
                if(positionBall.current.vx < 0 )
                    positionBall.current.vx = 0.05 
                else
                    positionBall.current.vx = -0.05 
                positionBall.current.x = 1
            }
        if( positionBall.current.x >= 2.01 || positionBall.current.x <= 0.01 )
            positionBall.current.vx *= -1
        if((positionBall.current.z >= positionPaddle.z -0.05  && positionBall.current.z <= positionPaddle.z  )  &&
         (positionBall.current.x >= positionPaddle.x -0.3  && positionBall.current.x <= positionPaddle.x  + 0.3))
        {
            const collisionPosition =  positionPaddle.x - positionBall.current.x
            positionBall.current.vz *=  -1 
            positionBall.current.vx = collisionPosition * -0.2
        }
        if((positionBall.current.z >= positionOtherPaddle.z -0.05  && positionBall.current.z <= positionOtherPaddle.z  )  &&
         (positionBall.current.x >= positionOtherPaddle.x -0.3  && positionBall.current.x <= positionOtherPaddle.x  + 0.3))
        {
            const collisionPosition =  positionOtherPaddle.x - positionBall.current.x
            positionBall.current.vz *=  -1 
            positionBall.current.vx = collisionPosition * -0.2
        }
        ref.current.position.x = positionBall.current.x
        ref.current.position.z = positionBall.current.z

        

    })
    return (
        <>
            <mesh position={[0,0.1,0]} ref={ref}>
                <sphereGeometry args={[0.03]}/>
                <meshStandardMaterial color={'red'}/>
            </mesh>
            <mesh position={[1, 0.1, 1.92]} ref={refs}>
                <boxGeometry args={[0.5, 0.1, 0.05]} />
                <meshStandardMaterial color={"purple"} />
            </mesh>
            <mesh position={[1, 0.1, -1.92]} ref={OtherPaddleRef}>
                <boxGeometry args={[0.5, 0.1, 0.05]} />
                <meshStandardMaterial color={"red"} />
            </mesh>
        </>
        
    )
}