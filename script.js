class Classdropdown {
  constructor(containerId, inputId, listId, options) {
    this.containerId = containerId;
    this.inputId = inputId;
    this.listId = listId;
    this.options = options;
  }

  create(filter = "") {
    const list = document.getElementById(this.listId);
    const filterOptions = this.options.filter(
      (d) =>
        filter === "" || d.text.toLowerCase().startsWith(filter.toLowerCase())
    );

    if (filterOptions.length === 0) {
      list.classList.remove("active");
    } else {
      list.classList.add("active");
    }

    list.innerHTML = filterOptions
      .map((o) => `<li id="${o.id}" class="list-item-${o.id}">${o.text}</li>`)
      .join("");
  }

  addListeners(Classdropdown) {
    const container = document.getElementById(this.containerId);
    const input = document.getElementById(this.inputId);
    const list = document.getElementById(this.listId);
    const self = this;

    container.addEventListener("click", (e) => {
      if (e.target.id === this.inputId) {
        container.classList.toggle("active");
      } else if (e.target.id === "Classdropdown-icon") {
        container.classList.toggle("active");
        input.focus();
      }
    });

    input.addEventListener("input", function (e) {
      if (!container.classList.contains("active")) {
        container.classList.add("active");
      }

      self.create(input.value);
    });

    list.addEventListener("click", function (e) {
      if (e.target.nodeName.toLocaleLowerCase() === "li") {
        input.value = e.target.innerText;
        container.classList.remove("active");

        // Dispatch custom event when class selection changes
        const classChangedEvent = new CustomEvent("classChanged", {
          detail: {
            selectedClass: e.target.innerText,
          },
        });
        document.dispatchEvent(classChangedEvent);
      }
    });

    document.addEventListener("click", function (e) {
      if (!container.contains(e.target)) {
        const filterOptions = self.options.filter(
          (d) =>
            input.value === "" ||
            d.text.toLowerCase().startsWith(input.value.toLowerCase())
        );

        if (
          filterOptions.length === 0 ||
          !filterOptions.some(
            (option) => option.text.toLowerCase() === input.value.toLowerCase()
          )
        ) {
          input.value = ""; // Reset input to blank
        } else {
          const properCaseOption = filterOptions.find(
            (option) => option.text.toLowerCase() === input.value.toLowerCase()
          );
          input.value = properCaseOption.text; // Set input to proper case
        }
        container.classList.remove("active");
      }
    });
  }
}

const data = [
  { id: "dk_ul", value: "Death Knight", text: "Death Knight" },
  { id: "dh_ul", value: "Demon Hunter", text: "Demon Hunter" },
  { id: "druid_ul", value: "Druid", text: "Druid" },
  { id: "evoker_ul", value: "Evoker", text: "Evoker" },
  { id: "hunter_ul", value: "Hunter", text: "Hunter" },
  { id: "mage_ul", value: "Mage", text: "Mage" },
  { id: "monk_ul", value: "Monk", text: "Monk" },
  { id: "paladin_ul", value: "Paladin", text: "Paladin" },
  { id: "priest_ul", value: "Priest", text: "Priest" },
  { id: "rogue_ul", value: "Rogue", text: "Rogue" },
  { id: "shaman_ul", value: "Shaman", text: "Shaman" },
  { id: "warlock_ul", value: "Warlock", text: "Warlock" },
  { id: "warrior_ul", value: "Warrior", text: "Warrior" },
];

const ClassChoice1 = new Classdropdown(
  "ClassChoice1",
  "ClassChoice1-input",
  "ClassChoice1-ul",
  data
);
ClassChoice1.create();
ClassChoice1.addListeners(Classdropdown);

const ClassChoice2 = new Classdropdown(
  "ClassChoice2",
  "ClassChoice2-input",
  "ClassChoice2-ul",
  data
);
ClassChoice2.create();
ClassChoice2.addListeners(Classdropdown);

const ClassChoice3 = new Classdropdown(
  "ClassChoice3",
  "ClassChoice3-input",
  "ClassChoice3-ul",
  data
);
ClassChoice3.create();
ClassChoice3.addListeners(Classdropdown);

class Specdropdown {
  constructor(containerId, inputId, listId, options) {
    this.containerId = containerId;
    this.inputId = inputId;
    this.listId = listId;
    this.options = options;
  }

  create(filter = "") {
    console.log("Creating dropdown...");
    const list = document.getElementById(this.listId);
    const selectedClass = document.getElementById(
      this.containerId.replace("SpecChoice", "ClassChoice") + "-input"
    ).value;

    const classSpec = this.options.find(
      (spec) => spec.className === selectedClass
    );
    if (!classSpec) {
      // No class selected or no specializations found for the selected class
      list.classList.remove("active");
      list.innerHTML = "";
      return;
    }

    const filterOptions = classSpec.specializations.filter(
      (d) =>
        filter === "" || d.text.toLowerCase().startsWith(filter.toLowerCase())
    );

    if (filterOptions.length === 0) {
      list.classList.remove("active");
    } else {
      list.classList.add("active");
    }

    list.innerHTML = filterOptions
      .map(
        (spec) =>
          `<li>
          <input type="checkbox" class="spec-checkbox" value="${spec.text}" id="${spec.id}">
          <label for="${spec.id}">${spec.text}</label>
        </li>`
      )
      .join("");
  }

  addListeners(Specdropdown) {
    const container = document.getElementById(this.containerId);
    const input = document.getElementById(this.inputId);
    const list = document.getElementById(this.listId);
    const self = this;

    container.addEventListener("click", (e) => {
      console.log("Container clicked");
      if (e.target.id === this.inputId) {
        container.classList.toggle("active");
      } else if (e.target.id === "Specdropdown-icon") {
        container.classList.toggle("active");
        input.focus();
      }
    });

    input.addEventListener("input", function (e) {
      console.log("Input changed");
      if (!container.classList.contains("active")) {
        container.classList.add("active");
      }
      self.create(input.value);
    });

    list.addEventListener("change", function (e) {
      console.log("List changed");
      const checkbox = e.target;
      if (
        checkbox.type === "checkbox" &&
        checkbox.classList.contains("spec-checkbox")
      ) {
        const specName = checkbox.value;
        if (checkbox.checked) {
          // Add the specialization to the input field
          if (!input.value.trim()) {
            input.value = specName;
          } else {
            input.value += `, ${specName}`;
          }
        } else {
          // Remove the specialization from the input field
          input.value = input.value
            .split(", ")
            .filter((item) => item !== specName)
            .join(", ");
        }
      }
    });

    document.addEventListener("click", function (e) {
      console.log("Document clicked");
      if (!container.contains(e.target)) {
        container.classList.remove("active");
      }
    });

    // Listen for classChanged event and update the specialization dropdown
    document.addEventListener("classChanged", function (event) {
      console.log("Class changed");
      self.create(); // Update the specialization dropdown when the class changes
    });
  }
}

const classSpecializations = [
  {
    className: "Death Knight",
    specializations: [
      { id: "dk_blood", value: "Blood", text: "Blood" },
      { id: "dk_frost", value: "Frost", text: "Frost" },
      { id: "dk_unholy", value: "Unholy", text: "Unholy" },
    ],
  },
  {
    className: "Demon Hunter",
    specializations: [
      { id: "dh_havoc", value: "Havoc", text: "Havoc" },
      { id: "dh_vengeance", value: "Vengeance", text: "Vengeance" },
    ],
  },
  {
    className: "Druid",
    specializations: [
      { id: "druid_balance", value: "Balance", text: "Balance" },
      { id: "druid_feral", value: "Feral", text: "Feral" },
      { id: "druid_guardian", value: "Guardian", text: "Guardian" },
      { id: "druid_restoration", value: "Restoration", text: "Restoration" },
    ],
  },
  {
    className: "Evoker",
    specializations: [
      { id: "evoker_devastation", value: "Devastation", text: "Devastation" },
      {
        id: "evoker_preservation",
        value: "Preservation",
        text: "Preservation",
      },
      {
        id: "evoker_augmentation",
        value: "Augmentation",
        text: "Augmentation",
      },
    ],
  },
  {
    className: "Hunter",
    specializations: [
      {
        id: "hunter_beast_mastery",
        value: "Beast Mastery",
        text: "Beast Mastery",
      },
      {
        id: "hunter_marksmanship",
        value: "Marksmanship",
        text: "Marksmanship",
      },
      { id: "hunter_survival", value: "Survival", text: "Survival" },
    ],
  },
  {
    className: "Mage",
    specializations: [
      { id: "mage_arcane", value: "Arcane", text: "Arcane" },
      { id: "mage_fire", value: "Fire", text: "Fire" },
      { id: "mage_frost", value: "Frost", text: "Frost" },
    ],
  },
  {
    className: "Monk",
    specializations: [
      { id: "monk_brewmaster", value: "Brewmaster", text: "Brewmaster" },
      { id: "monk_mistweaver", value: "Mistweaver", text: "Mistweaver" },
      { id: "monk_windwalker", value: "Windwalker", text: "Windwalker" },
    ],
  },
  {
    className: "Paladin",
    specializations: [
      { id: "paladin_holy", value: "Holy", text: "Holy" },
      { id: "paladin_protection", value: "Protection", text: "Protection" },
      { id: "paladin_retribution", value: "Retribution", text: "Retribution" },
    ],
  },
  {
    className: "Priest",
    specializations: [
      { id: "priest_discipline", value: "Discipline", text: "Discipline" },
      { id: "priest_holy", value: "Holy", text: "Holy" },
      { id: "priest_shadow", value: "Shadow", text: "Shadow" },
    ],
  },
  {
    className: "Rogue",
    specializations: [
      {
        id: "rogue_assassination",
        value: "Assassination",
        text: "Assassination",
      },
      { id: "rogue_outlaw", value: "Outlaw", text: "Outlaw" },
      { id: "rogue_subtlety", value: "Subtlety", text: "Subtlety" },
    ],
  },
  {
    className: "Shaman",
    specializations: [
      { id: "shaman_elemental", value: "Elemental", text: "Elemental" },
      { id: "shaman_enhancement", value: "Enhancement", text: "Enhancement" },
      { id: "shaman_restoration", value: "Restoration", text: "Restoration" },
    ],
  },
  {
    className: "Warlock",
    specializations: [
      { id: "warlock_affliction", value: "Affliction", text: "Affliction" },
      { id: "warlock_demonology", value: "Demonology", text: "Demonology" },
      { id: "warlock_destruction", value: "Destruction", text: "Destruction" },
    ],
  },
  {
    className: "Warrior",
    specializations: [
      { id: "warrior_arms", value: "Arms", text: "Arms" },
      { id: "warrior_fury", value: "Fury", text: "Fury" },
      { id: "warrior_protection", value: "Protection", text: "Protection" },
    ],
  },
];

// Initialization of SpecChoice1
const SpecChoice1 = new Specdropdown(
  "SpecChoice1",
  "SpecChoice1-input",
  "SpecChoice1-ul",
  classSpecializations
);
SpecChoice1.create();
SpecChoice1.addListeners(Specdropdown);

// Initialization of SpecChoice2
const SpecChoice2 = new Specdropdown(
  "SpecChoice2",
  "SpecChoice2-input",
  "SpecChoice2-ul",
  classSpecializations
);
SpecChoice2.create();
SpecChoice2.addListeners(Specdropdown);

// Initialization of SpecChoice3
const SpecChoice3 = new Specdropdown(
  "SpecChoice3",
  "SpecChoice3-input",
  "SpecChoice3-ul",
  classSpecializations
);
SpecChoice3.create();
SpecChoice3.addListeners(Specdropdown);
