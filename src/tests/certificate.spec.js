import React from 'react';
import { shallow, mount } from 'enzyme';
import Certificate from '../components/Certificate'
import testConfig from '../config/testConfig.js';


describe("Should render Certificate component", () => {
    it("should contain h1 wrapper in Certificate component", () => {
        const component = shallow(<Certificate/>);
        const wrapper = component.find('h1');
        expect(wrapper.length).toBe(1);
    });
});
