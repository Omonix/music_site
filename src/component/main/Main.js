import React from "react";
import pack from "../../musicPack.json";

const Main = () => {
  return (
    <div>
      <div className="musicContainer">
        {pack.map((element, index) => {
          return (
            <div className="individualMusic" key={index}>
              <div>{element.song}</div>
              <div>
                <audio controls>
                  <source src={element.link} type="audio/wav" />
                </audio>
              </div>
              <div>Pushed by : {element.by}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
