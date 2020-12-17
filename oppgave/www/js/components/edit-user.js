import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";

class EditUser extends LitElement {
  static get properties() {
    return {
      user: { type: Object }
    };
  }

  constructor(){
    super();
    this.formData ={};
  }

  updateUser() {
    fetch("api/updateUser.php", {
      method: "POST",
      body: this.formData

    }) 
  }
  


}
customElements.define('edit-user', EditUser);
