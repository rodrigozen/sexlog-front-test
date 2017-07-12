import Vue from 'vue';
import Home from '@/pages/Home';
/* eslint no-unused-expressions: "off"*/

describe('Home.vue', () => {
    it('should have a button', () => {
        const Constructor = Vue.extend(Home);
        const bus = new Vue();
        Constructor.prototype.$bus = bus;
        const vm = new Constructor().$mount();
        expect(vm.$el.querySelector('button'))
           .to.not.be.null;
    });
});

describe('Home.vue', () => {
    it('should start with modal closed', () => {
        const Constructor = Vue.extend(Home);
        const bus = new Vue();
        Constructor.prototype.$bus = bus;
        const vm = new Constructor().$mount();
        expect(vm.$el.querySelector('.modal'))
           .to.be.null;
    });
});
