/* EIC website runtime: a small base class so each page's logic runs on petite-vue. */
(function () {
  function DCLogic(props) { this.props = props || {}; this.state = {}; }
  DCLogic.prototype.setState = function (patch) {
    var p = typeof patch === 'function' ? patch(this.state, this.props) : patch;
    this.state = Object.assign({}, this.state, p);
    if (this.__render) this.__render();
  };
  DCLogic.prototype.forceUpdate = function () { if (this.__render) this.__render(); };
  window.DCLogic = DCLogic;
  window.mountPage = function (Component) {
    var inst = new Component({});
    var scope = PetiteVue.reactive(inst.renderVals());
    inst.__render = function () { Object.assign(scope, inst.renderVals()); };
    PetiteVue.createApp(scope).mount('#app');
    if (inst.componentDidMount) inst.componentDidMount();
  };
})();
