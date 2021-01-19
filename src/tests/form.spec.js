import { shallow } from 'enzyme';
import React from 'react';
import Form from '../components/Form';
import testConfig from '../config/testConfig.js';

describe("should render Form component", () => {
    it("should contain .creation-form wrapper", () => {
        const component = shallow(<Form/>);
        const wrapper = component.find(".creation-form");
        expect(wrapper.length).toBe(1);
    });
    
    it("should match snapshot", () => {
        const component = shallow(<Form/>);
        expect(component).toMatchSnapshot();
    });
});
