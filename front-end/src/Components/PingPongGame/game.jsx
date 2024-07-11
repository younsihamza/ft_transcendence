import { KeyboardControls } from "@react-three/drei";
import Ball from "./ball";
import Table from "./table";
import Walls from "./walls";
import { Physics } from "@react-three/rapier";
import  {useMemo} from  'react'

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
            <Table/>
            <Ball/>
            <Walls/>
    </KeyboardControls>
    </>)
}