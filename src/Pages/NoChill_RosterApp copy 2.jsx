import * as React from "react";
import { useState } from "react";
import Select from "react-select";

import "./NoChill_RosterApp.css";
import { Link } from "react-router-dom";
import NoChill_Logo from "../assets/NoChill.ico";
import { Popup, SubmittedPopup } from "../Components/Popup";
import { BlizzButton } from "../Components/BlizzButton";

export function NoChill_RosterApp() {
  document.title = "No Chill - Mal'Ganis";

  const [isPopupVisible, setIsPopUpVisible] = useState(false);
  const [isSubmittedPopupVisible, setIsSubmittedPopUpVisible] = useState(false);

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

  const [OtherComments, setOtherComments] = useState("");

  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbyk0fXddO5b7SOyGtfjlXKaf_XmgMpIQ4AlXqTVwba7OwL6PQVfAeakvGZmRqg47IQw/exec";
  const SubmittingInProgress = false;
  const DisableSubmit = !(
    document.getElementById("PlayerName_Input")?.value &&
    WoWClass1?.name &&
    spec1?.map((obj) => obj.spec)?.join(", ") &&
    !SubmittingInProgress
  );

  const handleSubmit = (event) => {
    setIsPopUpVisible(!isPopupVisible);
    setIsSubmittedPopUpVisible(!isSubmittedPopupVisible);

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
    formData.append(
      "Additional Comments",
      document.getElementById("AdditionalComments_Input").value
    );
    formData.append("Date Submitted", Date());

    fetch(scriptUrl, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          setIsSubmittedPopUpVisible(!isSubmittedPopupVisible);
        } else {
          throw new Error("Network response was not ok.");
        }
      })
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  };

  const handlePlayerNameChange = (obj) => {
    setPlayerName(obj);
  };
  const handleAddCommentChange = (obj) => {
    setOtherComments(obj);
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
    control: (styles) => ({ ...styles, backgroundColor: "white", height: 30 }),
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
      <link rel="icon" href={NoChill_Logo} />

      <main>
        <div className="Questionnaire animate fadeInDown delay">
          <div className="RosterClassQuestionnaire">
            <form
              className="QuestionnaireForm"
              method="post"
              action={scriptUrl}
              name="NoChill_Roster_Form"
            ></form>
          </div>
        </div>
      </main>
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
        speccolor: "#8787ED",
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
