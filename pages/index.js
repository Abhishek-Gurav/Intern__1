// import styles from '../styles/Home.module.css'

import Block from "../components/Block";
import Button from "../components/Button";
export default function Home() {
  return (
    <div>
      <div className="head">
        <h5>OGO ENV_APP</h5>
        <Button name="Login" />
        <Button name="Sign Up" />
      </div>
      <div class="main">
        <Block text="HOW CAN WE HELP YOU?" class="main__question" />
          <Block class="main__options" />
      </div>
    </div>
  );
}
