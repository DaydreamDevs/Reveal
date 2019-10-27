import { LightningElement, track, wire } from "lwc";
import confetti from "@salesforce/resourceUrl/aa";
import { loadScript } from "lightning/platformResourceLoader";
import getGender from "@salesforce/apex/revealController.getGender";

export default class Reveal extends LightningElement {
  @track detailsVisible = false;
  @wire(getGender) contact;

  handleClick() {
    var can;
    var confettiSettings;
    var confettiDo;
    loadScript(this, confetti + "/bb.js").then(() => {
      can = this.template.querySelector("canvas");
      confettiSettings = {
        target: can,
        max: 200,
        props: ["square", "line"],
        colors: this.color
      };

      confettiDo = new window.ConfettiGenerator(confettiSettings);
      confettiDo.render();
      this.detailsVisible = true;
    });
  }

  get color() {
    if (this.contact.data.Gender__c === "boy") {
      return [[40, 85, 209], [15, 78, 252], [135, 167, 255]];
    }
    return [[245, 87, 66], [255, 84, 84], [255, 166, 166]];
  }
}
