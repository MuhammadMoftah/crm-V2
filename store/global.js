export const state = () => ({
    modal: '',
});

export const getters = {};
export const mutations = {
    modal(state, payload) {
        state.modal = payload
    },
    closeModal(state) {
        state.modal = ''
    },
};
export const actions = {};
