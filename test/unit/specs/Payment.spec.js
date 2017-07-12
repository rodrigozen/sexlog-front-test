import Vue from 'vue';
import Payment from '@/pages/Payment';

/* eslint no-unused-expressions: "off"*/
describe('Payment.vue', () => {
    it('should have an input', () => {
        const Constructor = Vue.extend(Payment);
        const bus = new Vue();
        Constructor.prototype.$bus = bus;
        const vm = new Constructor({
            propData: {
                selectedPlan: {
                    id: 1,
                },
            },
        }).$mount();
        expect(vm.$el.querySelector('input'))
           .to.not.be.null;
    });
});

describe('Payment.vue', () => {
    it('should have an isFormValid function', () => {
        const Constructor = Vue.extend(Payment);
        const bus = new Vue();
        Constructor.prototype.$bus = bus;
        const vm = new Constructor({
            propData: {
                selectedPlan: {
                    id: 1,
                },
            },
        }).$mount();
        expect(vm.isFormValid)
           .to.be.an.function;
    });
});

describe('Payment.vue', () => {
    it('should have an validDate function', () => {
        const Constructor = Vue.extend(Payment);
        const bus = new Vue();
        Constructor.prototype.$bus = bus;
        const vm = new Constructor({
            propData: {
                selectedPlan: {
                    id: 1,
                },
            },
        }).$mount();
        expect(vm.validDate)
           .to.be.an.function;
    });
});

describe('Payment.vue', () => {
    it('should have an invalid date for a past date', () => {
        const Constructor = Vue.extend(Payment);
        const bus = new Vue();
        Constructor.prototype.$bus = bus;
        const vm = new Constructor({
            propData: {
                selectedPlan: {
                    id: 1,
                },
            },
        }).$mount();
        expect(vm.validDate(new Date(), 0, 2017))
           .to.be.false;
    });
});

describe('Payment.vue', () => {
    it('should have a valid date for a future date', () => {
        const Constructor = Vue.extend(Payment);
        const bus = new Vue();
        Constructor.prototype.$bus = bus;
        const vm = new Constructor({
            propData: {
                selectedPlan: {
                    id: 1,
                },
            },
        }).$mount();
        expect(vm.validDate(new Date(), 0, 2050))
           .to.be.true;
    });
});
