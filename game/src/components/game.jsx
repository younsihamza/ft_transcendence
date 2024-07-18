import { KeyboardControls } from "@react-three/drei";
import Ball from "./ball";
import MyPaddle from "./Mypaddle";
import OtherPlayer from "./OtherPaddle";
import Table from "./table";
import Walls from "./walls";
import { Physics } from "@react-three/rapier";
import  {useMemo} from  'react'
import { Html } from "@react-three/drei";

export default function Game()
{
    const map = useMemo(()=>[
        { name: 'leftOther', keys: ['ArrowLeft'] },
        { name: 'rightOther', keys: ['ArrowRight'] },
        { name: 'left', keys: [ 'KeyA'] },
        { name: 'right', keys: ['KeyD'] }
      ], [])
    return (<>
    <KeyboardControls map={map}>
        <Physics debug>
            <Table/>
            <Ball/>
            <Walls/>
            {/* <OtherPlayer/> */}
            {/* <MyPaddle/> */}
        </Physics>
    </KeyboardControls>
    </>)
}