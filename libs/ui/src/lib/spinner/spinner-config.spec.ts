import { createAction } from '@ngrx/store';
import { barStartAction, bazStartAction, fooStartAction, spinnerConfigs } from '@si-bre/ui/test';
import { getActions, getSpinnerNamesForAction } from "./spinner-config";

describe('spinnerConfig', () => {

  describe('getSpinnerNamesForAction', () => {
    describe('startActions', () => {

      it('returns the spinner names that match the action', () => {
        const expected = ['foo', 'baz'];

        const spinnerNames = getSpinnerNamesForAction('startActions', spinnerConfigs, fooStartAction);

        expect(spinnerNames).toEqual(expected);
      });

      it('returns an empty array for an unknown action', () => {
        const expected = [];

        const spinnerNames = getSpinnerNamesForAction('startActions', spinnerConfigs, createAction('invalid'));

        expect(spinnerNames).toEqual(expected);
      });
    });

  });

  describe('getActions', () => {
    it('returns all actions from the spinner configs', () => {
      const expected = [
        fooStartAction,
        barStartAction,
        bazStartAction
      ];

      const actions = getActions('startActions', spinnerConfigs);

      expect(actions).toEqual(expected);
    })
  });

});
