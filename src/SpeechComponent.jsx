import React, { useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
export default function SpeechComponent() {
  const { speak } = useSpeechSynthesis();

  //useState
  const [value, setValue] = useState();

  //inputEvent
  const inputEvent = (e) => {
    setValue(e.target.value);
  };

  //speechFun
  const speechFun = () => {
    speak({ text: value });
  };

  //return statement
  return (
    <div className="container mt-5 pl-5">
      <h4 className="pl-3 u">Speach App</h4>
      <div className="row">
        <div className="form-group shadow-textarea w-50 pl-4">
          <textarea
            style={{ height: "170px" }}
            className="form-control z-depth-1"
            id="exampleFormControlTextarea6"
            rows="3"
            placeholder="Write something here..."
            onChange={inputEvent}
            value={value}
          ></textarea>
        </div>
      </div>
      <div>
        <button className="btn btn-info w-50" onClick={speechFun}>
          Speech
        </button>
      </div>
    </div>
  );
}
