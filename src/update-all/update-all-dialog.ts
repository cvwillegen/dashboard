import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import "@material/mwc-button";
import "../components/remote-process";
import "../components/process-dialog";

@customElement("esphome-compile-all-dialog")
class ESPHomeCompileAllDialog extends LitElement {
  @property() public filename!: string;

  protected render() {
    return html`
      <esphome-process-dialog
        heading="Update All"
        .type=${"update-all"}
        @closed=${this._handleClose}
      ></esphome-process-dialog>
    `;
  }

  private _handleClose() {
    this.parentNode!.removeChild(this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "esphome-compile-all-dialog": ESPHomeCompileAllDialog;
  }
}