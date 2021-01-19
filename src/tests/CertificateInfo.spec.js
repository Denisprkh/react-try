import { shallow } from 'enzyme';
import React from 'react';
import CertificateInfo from '../components/CertificateInfo';
import testConfig from '../config/testConfig.js';

const setUpCertificate = () => {
    return {
        title: "Title",
        tags: [ {
            name: "tag"
        }, {
            name: "tagTwo"
        }],
        price: "125.5",
        duration: "PT132H22M"
    }
}

describe("Should render CertificateInfo component", () => {
    it("should contain certificate-info wrapper", () => {
        const component = shallow(<CertificateInfo certificate={setUpCertificate}/>);
        const wrapper = component.find(".certificate-info")
        expect(wrapper.length).toBe(1);
    });
});