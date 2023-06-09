import { EVMResults } from "./components/EVMResults";
import { useState } from "react";

import "./App.css";

export function App() {
  //   const { isConnected } = useAccount();
  const [textCode, setTextCode] = useState("");
  const [textData, setTextData] = useState("");
  const [textValue, setTextValue] = useState("");
  const [bytecode, setBytecode] = useState("");
  const [data, setData] = useState("");
  const [value, setValue] = useState("");

  const sendParamters = () => {
    setBytecode(textCode);
    setData(textData);
    setValue(textValue);
  };

  return (
    <>
      <header>
        <div className="header">
          <h1>Not Your Keys</h1>
        </div>
      </header>
      <div className="main">
        <div className="box">
          <div className="hint">
            <p>
              // time is critical
              <br />
              // my wei balance is a joke
              <br />
              // please select for me
            </p>
          </div>
          <div className="hint-detail">
            <p>
              0xfc10b009f8395435080c202eb58edae7d8919500d2a97ed214c3c8395e635aa1
              <br />
              0xeeDE8663A8cF15F371F764F5de95736B7baAB757
              <br />
              function execute(bytes,bytes,uint256)
            </p>
          </div>
        </div>


        <textarea
          className="textarea-terminal"
          value={textCode}
          placeholder="bytecode: sum the answers, copy to memory, and return"
          onChange={(e) => setTextCode(e.target.value)}
        />

        <button className="button-execute on" onClick={(e) => sendParamters()}>
          Execute
        </button>
        {bytecode && (
          <EVMResults bytecode={bytecode} data={data} value={value} />
        )}
      </div>

      <footer>
        <a href="https://vevm-demo.vercel.app" target={"_blank"}>
          https://vevm-demo.vercel.app
        </a>
        <a href="https://www.evm.codes" target={"_blank"}>
          https://www.evm.codes
        </a>
        <a
          href="https://ethereum.github.io/execution-specs/autoapi/ethereum/shanghai/vm"
          target={"_blank"}
        >
          https://ethereum.github.io/execution-specs/autoapi/ethereum/shanghai/vm
        </a>
        <a href="https://etherscan.io" target={"_blank"}>
          https://etherscan.io
        </a>
        <a href="https://github.com/kethcode/vEVM" target={"_blank"}>
          https://github.com/kethcode/vEVM
        </a>
        <a href="https://www.4byte.directory" target={"_blank"}>
          https://www.4byte.directory
        </a>
        <a
          href="https://emn178.github.io/online-tools/keccak_256.html"
          target={"_blank"}
        >
          https://emn178.github.io/online-tools/keccak_256.html
        </a>
        <a
          href="https://www.browserling.com/tools/utc-to-unix"
          target={"_blank"}
        >
          https://www.browserling.com/tools/utc-to-unix
        </a>
      </footer>
    </>
  );
}
