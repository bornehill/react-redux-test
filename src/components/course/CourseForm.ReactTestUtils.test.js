import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm';

function setup(saving) {
    let props = {
        course: {}, loading: saving, errors: {},
        onSave: () => {},
        onChange: () => {}
    };

    let render = TestUtils.createRenderer();
    render.render(<CourseForm {...props} />);
    let output = render.getRenderOutput();

    return {
        props,
        output,
        render
    };
}

describe('CourseForm via React Test Utils', () => {
    it('render form and h1', () => {
        const { output } = setup();
        expect(output.type).toBe('form');

        let [ h1 ] = output.props.children;
        expect(h1.type).toBe('h1');
    });

    it('save button is labeled "Save" when not loading', () => {
        const { output } = setup(false);
        let submitButton = output.props.children[5];
        expect(submitButton.props.value).toBe('Save');
    });

    it('save button is labeled "Saving..." when loading', () => {
        const { output } = setup(true);
        let submitButton = output.props.children[5];
        expect(submitButton.props.value).toBe('Saving...');
    });    
});