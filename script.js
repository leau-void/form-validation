import zipcodeData from "./zipcodeData";

const form = {
  self: document.querySelector("#survey-form"),
  fieldsName: ["name", "email", "country", "zip", "password", "password2"],
  checkAllValidity() {
    return this.fieldsName.every((field) => {
      return this.self[field].checkValidity();
    });
  },
  updateZipRegex() {},
  handleChange() {},
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
    this.self.addEventListener("change", this.boundHandleChange);
    this.self.addEventListener("click", this.boundHandleSubmit);
  },
};

form.init();
