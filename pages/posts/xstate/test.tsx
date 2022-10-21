import { inspect } from "@xstate/inspect";
import { useInterpret, useMachine } from "@xstate/react";
import { useEffect, useRef } from "react";
import confirmationDialogMachine from "../../../lib/confirmation-dialog.machine";
import styles from "../../../styles/Home.module.css";

if (typeof window !== "undefined") {
  inspect({
    url: "https://statecharts.io/inspect",
    /* options */
  });
}

function Test() {
  const iframeRef = useRef(null);
  const [state, send] = useMachine(confirmationDialogMachine, {
    devTools: true,
    actions: {
      test: () => console.log("test"),
    },
  });

  const isOn = state.matches("light on");
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     inspect({});
  //   }
  // }, []);
  return (
    <div className={styles.main}>
      Light bulb is: {isOn ? "on" : "off"}
      <div
        style={{ width: "100px", cursor: "pointer" }}
        onClick={() => send("toggle")}
      >
        <LightBulb on={isOn} />
      </div>
      <iframe data-xstate className={styles.iframe} />
    </div>
  );
}

const LightBulb = ({ on }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 186.7 186.7">
    <path
      fill={on ? "#fdd141" : "#eef4fb"}
      d="M93.4 13.8c-43.9 0-79.5 35.6-79.5 79.5s35.6 79.5 79.5 79.5 79.5-35.6 79.5-79.5-35.6-79.5-79.5-79.5zm-.6 19.9h2c1.8 1.2 2.5 2.8 2.5 4.9-.1 3 0 6 0 9 0 2.7-1.5 4.4-3.5 4.4-2.1 0-3.3-1.6-3.3-4.5 0-3.1.1-6.1 0-9.2-.2-2 .5-3.6 2.3-4.6zM41.9 64.8c2.2-2.4 3.2-2.6 6.3-1.3l8.7 3.7c2.3 1 3.2 2.8 2.5 4.6s-3.2 2.8-5.4 1.9a192.61 192.61 0 0 1-10.3-4.8c-.8-.4-1.3-1.4-1.9-2.1.1-.7.1-1.4.1-2zm15.6 32.8c-3.7.7-7.4 1.1-11.1 1.7-2.1.3-3.5-.8-4.5-2.5v-1.5c1-1.9 2.7-2.6 4.7-2.9l7.7-1.3c.8-.1 1.6-.2 2.4-.2 2 0 3.6.8 3.8 2.9s-1.1 3.5-3 3.8zm5.1-56.4c1.1-.4 3.4-.3 3.9.4 2.7 3.6 5 7.5 7.4 11.3.2.3.1.6.3 1.5-.5.6-1.1 2-2 2.3-1 .3-3 .2-3.5-.5-2.7-3.5-5.1-7.2-7.4-11-1-1.6-.2-3.4 1.3-4zm40.1 107.3h-9.3c-3.7 0-7.5-.1-11.2 0-2 0-2.8-.8-2.8-2.7-.2-5.3-.2-5.3 5.2-5.3h19.8c3 0 3.2.2 3.3 3.1 0 4.9 0 4.9-5 4.9zm0-10.9h-9.3c-3.7 0-7.5-.1-11.2 0-2 0-2.8-.8-2.8-2.7-.2-5.3-.2-5.3 5.2-5.3h19.8c3 0 3.2.2 3.3 3.1 0 4.9 0 4.9-5 4.9zm18.8-54.5c-.3 5.3-1.8 10.3-4.3 15-4 7.6-7.8 15.2-9.4 23.7-.6 3.3-1.2 3.5-4.7 3.5H82.6c-1.7 0-2.8-.7-3.2-2.3-.5-1.9-1.1-3.7-1.5-5.6-1.5-6.7-4.6-12.7-7.7-18.7-3.2-6.3-5.2-12.9-4.4-20 1.1-9.7 6.3-16.3 15.5-19.5 8-2.7 16.2-2.7 24.2-.1 10.6 3.6 16.6 12.9 16 24zm4-37c-1.9 3.1-3.8 6.2-5.9 9.1-1.4 1.9-3.6 2.3-5.2 1.2s-1.9-3-.5-5.2c1.8-2.9 3.6-6 5.8-8.7.9-1.1 2.9-1.7 4.4-1.6.9 0 1.7 1.8 2.4 2.6-.5 1.2-.7 2-1 2.6zm19.7 50.7c-1.1 2.1-2.9 2.8-5.2 2.5l-10.1-1.5c-2-.3-3.4-2.2-3.1-4 .4-2.1 1.8-3.1 3.9-2.8 3.9.5 7.9 1.2 11.7 2 1.1.2 1.9 1.6 2.8 2.4v1.4zm0-30.1c-1.1 1-2.1 2.1-3.4 2.8-2.6 1.4-5.4 2.7-8.1 3.9-2.6 1.2-5 .5-5.9-1.6-.8-1.8.3-3.7 2.9-4.8 2.9-1.3 5.8-2.4 8.8-3.7s4-.9 5.8 1.9c-.1.5-.1 1-.1 1.5z"
    />
  </svg>
);

export default Test;
