import zipcodeData from "./zipcodeData";

const form = {
  self: document.querySelector("#survey-form"),
  fieldsName: ["name", "email", "country", "zip", "password", "password2"],
  checkAllValidity() {
    return this.fieldsName.every((field) => {
      return this.self[field].reportValidity();
    });
  },
  updateZipRegex(countryCode) {
    this.self.zip.pattern = zipcodeData[countryCode] || zipcodeData[""];
  },
  handleChange(event) {
    const target = event.target;

    if (!this.fieldsName.includes(target.name)) return;

    if (target.name === "country") this.updateZipRegex(target.value);

    if (target.validity.valid) {
      if (target.name === "password")
        this.self.password2.pattern = target.value;

      target.reportValidity();
    } else {
      let customMessage = "";
      if (!target.value) {
        let field = target.name;
        field =
          field === "zip"
            ? "zip code"
            : field === "password2"
            ? "password confirmation"
            : field;

        customMessage = `The ${field} field is required.`;
      } else {
        switch (target.name) {
          case "zip":
            customMessage = `The present zip code doesn't match with the selected country.\nThe expected format is ${target.pattern}.`;
            break;
          case "password":
            customMessage =
              "Passwords need at least 8 characters, including one letter and one number.";
            break;
          case "password2":
            customMessage = "The two passwords are not the same.";
            break;
          case "email":
            customMessage = "An email is separated in two by an '@'.";
        }
      }
      target.setCustomValidity(customMessage);
      target.reportValidity();
      target.addEventListener(
        "input",
        () => {
          target.setCustomValidity("");
        },
        { once: true }
      );
    }
  },
  boundHandleChange() {},
  handleSubmit(event) {
    if (!event.target.closest('[type="submit"]')) return;
    event.preventDefault();
    if (this.checkAllValidity()) return this.displayDone();
    return console.log("false");
  },
  boundHandleSubmit() {},
  displayDone() {
    document.querySelector("#done").classList.add("thanks");
  },
  init() {
    this.boundHandleChange = this.handleChange.bind(this);
    this.boundHandleSubmit = this.handleSubmit.bind(this);
    this.self.addEventListener("input", this.boundHandleChange);
    this.self.addEventListener("click", this.boundHandleSubmit);
  },
};

form.init();
