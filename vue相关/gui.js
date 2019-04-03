import Vue from "vue";
export default (model) => {
  return (options) => {
    let vm = new (Vue.extend({
      ...model,
      store: require("../store").default //状态
    }))
    vm.$mount();
    document.body.appendChild(vm.$el);
    vm.$on('close', () => {
      vm.$el.parentNode.removeChild(vm.$el);
      vm.$destroy();
    })
    // vm.$emit('open',options);
    return vm;
  }
}