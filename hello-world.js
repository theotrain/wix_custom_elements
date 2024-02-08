class HelloWorld extends HTMLElement {
  connectedCallback() {
    this.innerHTML = "<br/><br/>Hello World!<br/>and you too.";
  }
}
customElements.define("hello-world", HelloWorld);
