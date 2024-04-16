import logo from "./NoChill_Title.png";
import favicon from "./favicon.ico";
import divider from "./Background/Divider.png";
import divider2 from "./Background/Border_3.png";
import "./App.css";
import * as React from "react";
import Button from "@mui/material/Button";
import { useState } from "react";
import Select from "react-select";

function App() {
  document.title = "No Chill Roster";
  const [PlayersName, setPlayerName] = useState("");

  const [WoWClass1, setWowClass1] = useState(null);
  const [spec1, setSpec1] = useState([]);
  const [speclist1, setSpeclist1] = useState([]);

  const [WoWClass2, setWowClass2] = useState(null);
  const [spec2, setSpec2] = useState(null);
  const [speclist2, setSpeclist2] = useState([]);

  const [WoWClass3, setWowClass3] = useState(null);
  const [spec3, setSpec3] = useState(null);
  const [speclist3, setSpeclist3] = useState([]);

  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbyk0fXddO5b7SOyGtfjlXKaf_XmgMpIQ4AlXqTVwba7OwL6PQVfAeakvGZmRqg47IQw/exec";
  // const DisableSubmit = false;
  const DisableSubmit = !(
    document.getElementById("PlayerName_Input")?.value &&
    WoWClass1?.name &&
    spec1?.map((obj) => obj.spec)?.join(", ")
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append(
      "Player Name",
      document.getElementById("PlayerName_Input").value
    );
    formData.append("First Class", WoWClass1 ? WoWClass1.name : "");
    formData.append(
      "First Class' Specs",
      spec1 ? spec1.map((obj) => obj.spec).join(", ") : ""
    );
    formData.append(
      "First Class Comments",
      document.getElementById("Choice1Text").value
    );
    formData.append("Second Class", WoWClass2 ? WoWClass2.name : "");
    formData.append(
      "Second Class' Specs",
      spec2 ? spec2.map((obj) => obj.spec).join(", ") : ""
    );
    formData.append(
      "Second Class Comments",
      document.getElementById("Choice2Text").value
    );
    formData.append("Third Class", WoWClass3 ? WoWClass3.name : "");
    formData.append(
      "Third Class' Specs",
      spec3 ? spec3.map((obj) => obj.spec).join(", ") : ""
    );
    formData.append(
      "Third Class Comments",
      document.getElementById("Choice3Text").value
    );
    formData.append("Date Submitted", Date());

    fetch(scriptUrl, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  };

  const handlePlayerNameChange = (obj) => {
    setPlayerName(obj);
  };

  const handleWoWClassChange1 = (obj) => {
    setWowClass1(obj);
    setSpeclist1(obj.Specs);
    setSpec1(null);
    console.log(obj);
  };

  const handleSpecChange1 = (obj) => {
    const orderedSpecs = [];
    WoWClassesTable.forEach((classObj) => {
      if (classObj.name === WoWClass1.name) {
        classObj.Specs.forEach((specObj) => {
          if (obj.some((selectedSpec) => selectedSpec.spec === specObj.spec)) {
            orderedSpecs.push(
              obj.find((selectedSpec) => selectedSpec.spec === specObj.spec)
            );
          }
        });
      }
    });
    setSpec1(orderedSpecs);
  };

  const handleWoWClassChange2 = (obj) => {
    setWowClass2(obj);
    setSpeclist2(obj.Specs);
    setSpec2(null);
    console.log(obj);
  };

  const handleSpecChange2 = (obj) => {
    const orderedSpecs = [];
    WoWClassesTable.forEach((classObj) => {
      if (classObj.name === WoWClass2.name) {
        classObj.Specs.forEach((specObj) => {
          if (obj.some((selectedSpec) => selectedSpec.spec === specObj.spec)) {
            orderedSpecs.push(
              obj.find((selectedSpec) => selectedSpec.spec === specObj.spec)
            );
          }
        });
      }
    });
    setSpec2(orderedSpecs);
  };

  const handleWoWClassChange3 = (obj) => {
    setWowClass3(obj);
    setSpeclist3(obj.Specs);
    setSpec3(null);
    console.log(obj);
  };

  const handleSpecChange3 = (obj) => {
    const orderedSpecs = [];
    WoWClassesTable.forEach((classObj) => {
      if (classObj.name === WoWClass3.name) {
        classObj.Specs.forEach((specObj) => {
          if (obj.some((selectedSpec) => selectedSpec.spec === specObj.spec)) {
            orderedSpecs.push(
              obj.find((selectedSpec) => selectedSpec.spec === specObj.spec)
            );
          }
        });
      }
    });
    setSpec3(orderedSpecs);
  };

  const SelectStyle = {
    control: (styles) => ({ ...styles, backgroundColor: "white", height: 50 }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        background: isFocused ? data.color : "white",
        color: "black",
      };
    },
    multiValue: (styles, { data }) => {
      return {
        ...styles,
        backgroundColor: data.speccolor,
        color: "white",
      };
    },
    multiValueRemove: (styles, { data }) => {
      return {
        ...styles,
        color: "white",
        backgroundColor: data.speccolor,
        cursor: "pointer",
        ":hover": {
          color: "white",
        },
      };
    },
  };

  return (
    <>
      <meta charSet="utf-8" />
      <title>Aeon's Home</title>
      <link rel="icon" href={favicon} />
      <meta name="author" content="Alex Iukuridze" />
      <meta
        name="description"
        content="Evidence of me learning how to design a website from scratch."
      />
      <link rel="stylesheet" href="style.css" />
      <div id="canvas">
        <header id="header-container">
          <div id="header-title">
            <div id="logo" data-content-field="site-title">
              <div
                className="logo"
                data-shrink-original-size={26}
                style={{ letterSpacing: "0em" }}
              >
                <a href="/">
                  <img src={logo} alt="No Chill Guild" />
                </a>
              </div>
            </div>
          </div>
        </header>

        <main>
          <div className="Questionnaire">
            <div className="RosterClassQuestionnaire">
              <h2 className="QuestionnaireTitle">
                No Chill - The War Within Roster
              </h2>
              <div className="Divider">
                <img src={divider} />
              </div>
              <form
                className="QuestionnaireForm"
                method="post"
                action={scriptUrl}
                name="NoChill_Roster_Form"
              >
                <div className="PlayerName">
                  <h3 className="QuestionLabel">Your name?</h3>
                  <input
                    id="PlayerName_Input"
                    name="Player Name"
                    className="PlayerNameText"
                    value={PlayersName}
                    onChange={(x) => handlePlayerNameChange(x.target.value)}
                    type="text"
                    placeholder="e.g. Aeon"
                  />
                </div>
                <div className="WoWClass">
                  <div className="ClassLabel">
                    <h3 className="QuestionLabel">
                      What's your top choice class/spec to play?
                    </h3>
                  </div>
                  <div className="ClassQuestions">
                    <div className="ClassDropdown">
                      <br />
                      <b>First Choice Class:</b>
                      <Select
                        id="ClassChoice1"
                        name="First Class"
                        className="ClassDropdown-input"
                        placeholder="1st Choice Class"
                        value={WoWClass1}
                        options={WoWClassesTable}
                        onChange={handleWoWClassChange1}
                        getOptionLabel={(x) => x.name}
                        getOptionValue={(x) => x.name}
                        styles={SelectStyle}
                      />
                    </div>
                    <div className="SpecDropdown">
                      <br />
                      <b>First Class's Specs:</b>
                      <Select
                        id="SpecChoice1"
                        name="First Class' Specs"
                        className="SpecDropdown-input"
                        placeholder="Select Specialization(s)"
                        value={spec1}
                        options={speclist1}
                        onChange={handleSpecChange1}
                        getOptionLabel={(x) => x.spec}
                        getOptionValue={(x) => x.spec}
                        isMulti
                        styles={SelectStyle}
                        closeMenuOnSelect={false}
                      />
                    </div>
                    <div className="CommentSection">
                      <br />
                      <b>Optional Comments:</b>
                      <input
                        id="Choice1Text"
                        name="First Class Comments"
                        className="ChoiceText"
                        type="text"
                        placeholder="Anything you want to add?"
                      />
                    </div>
                  </div>
                </div>
                <div className="WoWClass">
                  <div className="ClassLabel">
                    <h3 className="QuestionLabel">2nd choice class/spec?</h3>
                  </div>
                  <div className="ClassQuestions">
                    <div className="ClassDropdown">
                      <br />
                      <b>Second Choice Class:</b>
                      <Select
                        id="ClassChoice2"
                        name="Second Class"
                        className="ClassDropdown-input"
                        placeholder="2nd Choice Class"
                        value={WoWClass2}
                        options={WoWClassesTable}
                        onChange={handleWoWClassChange2}
                        getOptionLabel={(x) => x.name}
                        getOptionValue={(x) => x.name}
                        styles={SelectStyle}
                      />
                    </div>
                    <div className="SpecDropdown">
                      <br />
                      <b>Second Class's Specs:</b>
                      <Select
                        id="SpecChoice2"
                        name="Second Class' Specs"
                        className="SpecDropdown-input"
                        placeholder="Select Specialization(s)"
                        value={spec2}
                        options={speclist2}
                        onChange={handleSpecChange2}
                        getOptionLabel={(x) => x.spec}
                        getOptionValue={(x) => x.spec}
                        isMulti
                        styles={SelectStyle}
                        closeMenuOnSelect={false}
                      />
                    </div>
                    <div className="CommentSection">
                      <br />
                      <b>Optional Comments:</b>
                      <input
                        id="Choice2Text"
                        name="Second Class' Specs"
                        className="ChoiceText"
                        type="text"
                        placeholder="Anything you want to add?"
                      />
                    </div>
                  </div>
                </div>
                <div className="WoWClass">
                  <div className="ClassLabel">
                    <h3 className="QuestionLabel">3rd choice class spec?</h3>
                  </div>
                  <div className="ClassQuestions">
                    <div className="ClassDropdown">
                      <br />
                      <b>Third Choice Class:</b>
                      <Select
                        id="ClassChoice3"
                        name="Third Class"
                        className="ClassDropdown-input"
                        placeholder="3rd Choice Class"
                        value={WoWClass3}
                        options={WoWClassesTable}
                        onChange={handleWoWClassChange3}
                        getOptionLabel={(x) => x.name}
                        getOptionValue={(x) => x.name}
                        styles={SelectStyle}
                      />
                    </div>
                    <div className="SpecDropdown">
                      <br />
                      <b>Second Class's Specs:</b>
                      <Select
                        id="SpecChoice3"
                        name="Third Class' Specs"
                        className="SpecDropdown-input"
                        placeholder="Select Specialization(s)"
                        value={spec3}
                        options={speclist3}
                        onChange={handleSpecChange3}
                        getOptionLabel={(x) => x.spec}
                        getOptionValue={(x) => x.spec}
                        isMulti
                        styles={SelectStyle}
                        closeMenuOnSelect={false}
                      />
                    </div>
                    <div className="CommentSection">
                      <br />
                      <b>Optional Comments:</b>
                      <input
                        id="Choice3Text"
                        name="Third Class' Comments"
                        className="ChoiceText"
                        type="text"
                        placeholder="Anything you want to add?"
                      />
                    </div>
                  </div>
                </div>
                <div className="SubmitForm">
                  <button
                    className="SubmitButton"
                    onClick={handleSubmit}
                    disabled={DisableSubmit}
                  >
                    Submit Form
                  </button>
                </div>
                {/* <div className="Divider">
                  <img src={divider2} />
                </div> */}
              </form>
            </div>
          </div>
        </main>
      </div>
      {/* <footer class="footer">Started on 3/10/2024</footer> */}
    </>
  );
}

const classes = [
  { value: "Death Knight", label: "Death Knight", color: "#C41E3A" },
  { value: "Demon Hunter", label: "Demon Hunter", color: "#A330C9" },
  { value: "Druid", label: "Druid", color: "#FF7C0A" },
  { value: "Evoker", label: "Evoker", color: "#33937F" },
  { value: "Hunter", label: "Hunter", color: "#AAD372" },
  { value: "Mage", label: "Mage", color: "#3FC7EB" },
  { value: "Monk", label: "Monk", color: "#00FF98" },
  { value: "Paladin", label: "Paladin", color: "#F48CBA" },
  { value: "Priest", label: "Priest", color: "#FFFFFF" },
  { value: "Rogue", label: "Rogue", color: "#FFF468" },
  { value: "Shaman", label: "Shaman", color: "#0070DD" },
  { value: "Warlock", label: "Warlock", color: "#8788EE" },
  { value: "Warrior", label: "Warrior", color: "#C69B6D" },
];

const Specs = [
  { value: "Death Knight", label: "Death Knight", color: "#C41E3A" },
  { value: "Demon Hunter", label: "Demon Hunter", color: "#A330C9" },
  { value: "Druid", label: "Druid", color: "#FF7C0A" },
  { value: "Evoker", label: "Evoker", color: "#33937F" },
  { value: "Hunter", label: "Hunter", color: "#AAD372" },
  { value: "Mage", label: "Mage", color: "#3FC7EB" },
  { value: "Monk", label: "Monk", color: "#00FF98" },
  { value: "Paladin", label: "Paladin", color: "#F48CBA" },
  { value: "Priest", label: "Priest", color: "#FFFFFF" },
  { value: "Rogue", label: "Rogue", color: "#FFF468" },
  { value: "Shaman", label: "Shaman", color: "#0070DD" },
  { value: "Warlock", label: "Warlock", color: "#8788EE" },
  { value: "Warrior", label: "Warrior", color: "#C69B6D" },
];

const WoWClassesTable = [
  {
    name: "Death Knight",
    color: "#C41E3A",
    Specs: [
      {
        spec: "Blood",
        speccolor: "#C41E3A",
      },
      {
        spec: "Frost",
        speccolor: "#C41E3A",
      },
      {
        spec: "Unholy",
        speccolor: "#C41E3A",
      },
    ],
  },
  {
    name: "Demon Hunter",
    color: "#A330C9",
    Specs: [
      {
        spec: "Havoc",
        speccolor: "#A330C9",
      },
      {
        spec: "Vengeance",
        speccolor: "#A330C9",
      },
    ],
  },
  {
    name: "Druid",
    color: "#FF7D0A",
    Specs: [
      {
        spec: "Guardian",
        speccolor: "#FF7D0A",
      },
      {
        spec: "Balance",
        speccolor: "#FF7D0A",
      },
      {
        spec: "Feral",
        speccolor: "#FF7D0A",
      },
      {
        spec: "Restoration",
        speccolor: "#FF7D0A",
      },
    ],
  },
  {
    name: "Evoker",
    color: "#33937F",
    Specs: [
      {
        spec: "Devastation",
        speccolor: "#33937F",
      },
      {
        spec: "Augmentation",
        speccolor: "#33937F",
      },
      {
        spec: "Preservation",
        speccolor: "#33937F",
      },
    ],
  },
  {
    name: "Hunter",
    color: "#ABD473",
    Specs: [
      {
        spec: "Beast Mastery",
        speccolor: "#ABD473",
      },
      {
        spec: "Marksmanship",
        speccolor: "#ABD473",
      },
      {
        spec: "Survival",
        speccolor: "#ABD473",
      },
    ],
  },
  {
    name: "Mage",
    color: "#40C7EB",
    Specs: [
      {
        spec: "Arcane",
        speccolor: "#40C7EB",
      },
      {
        spec: "Fire",
        speccolor: "#40C7EB",
      },
      {
        spec: "Frost",
        speccolor: "#40C7EB",
      },
    ],
  },
  {
    name: "Monk",
    color: "#00FF96",
    Specs: [
      {
        spec: "Brewmaster",
        speccolor: "#00FF96",
      },
      {
        spec: "Mistweaver",
        speccolor: "#00FF96",
      },
      {
        spec: "Windwalker",
        speccolor: "#00FF96",
      },
    ],
  },
  {
    name: "Paladin",
    color: "#F58CBA",
    Specs: [
      {
        spec: "Holy",
        speccolor: "#F58CBA",
      },
      {
        spec: "Protection",
        speccolor: "#F58CBA",
      },
      {
        spec: "Retribution",
        speccolor: "#F58CBA",
      },
    ],
  },
  {
    name: "Priest",
    color: "#DDDDDD",
    Specs: [
      {
        spec: "Discipline",
        speccolor: "#DDDDDD",
      },
      {
        spec: "Holy",
        colspeccoloror: "#DDDDDD",
      },
      {
        spec: "Shadow",
        speccolor: "#DDDDDD",
      },
    ],
  },
  {
    name: "Rogue",
    color: "#FFF569",
    Specs: [
      {
        spec: "Assassination",
        speccolor: "#FFF569",
      },
      {
        spec: "Outlaw",
        speccolor: "#FFF569",
      },
      {
        spec: "Subtlety",
        speccolor: "#FFF569",
      },
    ],
  },
  {
    name: "Shaman",
    color: "#0070DE",
    Specs: [
      {
        spec: "Elemental",
        speccolor: "#0070DE",
      },
      {
        spec: "Enhancement",
        speccolor: "#0070DE",
      },
      {
        spec: "Restoration",
        speccolor: "#0070DE",
      },
    ],
  },
  {
    name: "Warlock",
    color: "#8787ED",
    Specs: [
      {
        spec: "Affliction",
        speccolor: "#8787ED",
      },
      {
        spec: "Demonology",
        speccolor: "#8787ED",
      },
      {
        spec: "Destruction",
        color: "#8787ED",
      },
    ],
  },
  {
    name: "Warrior",
    color: "#C79C6E",
    Specs: [
      {
        spec: "Arms",
        speccolor: "#C79C6E",
      },
      {
        spec: "Fury",
        speccolor: "#C79C6E",
      },
      {
        spec: "Protection",
        speccolor: "#C79C6E",
      },
    ],
  },
];

export default App;
