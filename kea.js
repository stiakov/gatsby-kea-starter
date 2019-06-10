import { kea } from "kea";
import PropTypes from "prop-types";
import CustomTypes from "./customTypes.js";
import * as R from "ramda";
import { select, put } from "redux-saga/effects"
import profile from "./images/profile.jpg";

export default kea({
    path: () => ["kea"],

    actions: () => ({
        stackPush: amount => ({ amount }),
        stackShift: amount => ({ amount }),
        swipe: (direction, id) => ({ direction, id }),
        flip: () => ({})
    }),

    reducers: ({ actions }) => ({
        stack: [
            {},
            CustomTypes.stack,
            {
                [actions.stackPush]: (state, payload) =>
                    R.flatten(R.append(payload.amount, state)),
                [actions.stackShift]: (state, payload) =>
                    R.slice(payload.amount, Infinity, state)
            }
        ],
        leftSwipes: [
            [],
            PropTypes.arrayOf(PropTypes.number),
            {
                [actions.swipe]: (state, payload) =>
                    !payload.direction ? R.append(payload.id, state) : state
            }
        ],
        rightSwipes: [
            [],
            PropTypes.arrayOf(PropTypes.number),
            {
                [actions.swipe]: (state, payload) =>
                    payload.direction ? R.append(payload.id, state) : state
            }
        ],
        flipped: [
            false,
            PropTypes.bool,
            {
                [actions.flip]: (state, payload) => !state
            }
        ]
    }),

    selectors: ({ selectors }) => ({
        stackFocus: [
            () => [selectors.stack],
            stack => R.head(stack).id,
            PropTypes.number
        ],
        leftSwipesCount: [
            () => [selectors.leftSwipes],
            ls => R.length(ls),
            PropTypes.number
        ],
        rightSwipesCount: [
            () => [selectors.rightSwipes],
            ls => R.length(ls),
            PropTypes.number
        ]
    }),

    takeEvery: ({ actions, workers }) => ({
        [actions.swipe]: function * () {
            const { stackPush } = this.actions;
            const state = yield select();
            const stackCount = R.length(state.kea.stack);
            const obj = {
                id: 1,
                text:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                img: profile,
                username: "username"
            }
            if (stackCount < 4) {
                yield put(stackPush(R.repeat(obj, 4)));
            }
        }
    })
});
