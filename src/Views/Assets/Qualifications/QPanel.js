import React from "react";
import { useState } from "react";

import { CaretDown } from "react-bootstrap-icons";
import { CaretUp } from "react-bootstrap-icons";

function QPanel(props) {
    const [isOpen, setIsOpen] = useState(false);
    let classNameSuffix = "";
    if (isOpen) {
        classNameSuffix = " Extended";
    } else {
        classNameSuffix = "";
    }
    let imgsrc = require("../Svgs/" + props.logoName);

    let Caret = isOpen ? CaretUp : CaretDown;

    return (
        <div className="tabWrapper">
            <div
                className={"QH" + (isOpen ? classNameSuffix + "QH" : "")}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className={"QHImgTxtWrapper"}>
                    <img
                        src={imgsrc.default}
                        alt="logo"
                        style={{
                            width: 50,
                            marginLeft: 20,
                            userSelect: "none",
                            borderRadius: "20px",
                        }}
                    />
                    <p className="QHTitle">{props.name}</p>
                </div>
                <Caret
                    color="black"
                    size={30}
                />
            </div>

            <div className={"QC" + (isOpen ? classNameSuffix + "QC" : "")}>
                {props.buttonInfo.map((element) => {
                    return (
                        <div
                            className={
                                "QCE" + (isOpen ? classNameSuffix + "QCE" : "")
                            }
                        >
                            <p className="QCText">{element[0]}</p>
                            <a
                                className={
                                    "QCB" +
                                    (isOpen ? classNameSuffix + "QCB" : "")
                                }
                                href={element[1]}
                                target="_blank"
                            >
                                Github
                            </a>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default QPanel;
