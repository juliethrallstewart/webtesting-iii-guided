import React from 'react';
import renderer from 'react-test-renderer'; // 1: install this npm module as a dev dependency

import App, { asyncFunc } from './App';

//integration test, tests the component and the app itself
describe('<App />', () => {
	// 2. write this test
	it('matches snapshot', () => {
		const tree = renderer.create(<App />); // generates a DOM tree

		// snapshots are a JSON representation of the DOM tree
		expect(tree.toJSON()).toMatchSnapshot();
	});
});

//unit test, like a utility function running some JS
describe('asyncFunc', () => {
	it('eventually resolves to success message', () => {
		let resolvedValue = null;
		const expected = 'Success!';
		asyncFunc().then(res => {
			resolvedValue = res;
			expect(resolvedValue).toEqual(expected);
		});
	});
});
