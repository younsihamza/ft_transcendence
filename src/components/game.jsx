import { Physics } from "@react-three/rapier";
import Ball from "./elements/ball";
import Table from "./elements/Table";

export default function Game() {
  return <Physics debug>
    <Ball/>
    <Table/>
  </Physics>;
}
