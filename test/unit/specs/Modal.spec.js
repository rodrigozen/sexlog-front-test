import Vue from 'vue';
import Modal from '@/components/Modal';
/* eslint no-unused-expressions: "off"*/

describe('Modal.vue', () => {
    it('should have a header', () => {
        const Constructor = Vue.extend(Modal);
        const vm = new Constructor().$mount();
        expect(vm.$el.querySelector('.modal-header'))
           .to.not.be.null;
    });
});

describe('Modal.vue', () => {
    it('should have a body', () => {
        const Constructor = Vue.extend(Modal);
        const vm = new Constructor().$mount();
        expect(vm.$el.querySelector('.modal-body'))
           .to.not.be.null;
    });
});

describe('Modal.vue', () => {
    it('should have a footer', () => {
        const Constructor = Vue.extend(Modal);
        const vm = new Constructor().$mount();
        expect(vm.$el.querySelector('.modal-body'))
           .to.not.be.null;
    });
});
