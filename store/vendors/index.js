export const state = () => ({
  items: [],
  filteredItems: [],
  item: {},
  meta: {},
});
export const getters = {
  items(state) {
    return state.items;
  },
  item(state) {
    return state.item;
  },
  meta(state) {
    return state.meta;
  },
};
export const mutations = {
  setItems(state, items) {
    state.items = items;
  },
  setItem(state, item) {
    state.items.splice(
      state.items.findIndex((s) => s.id === item.id),
      1,
      item
    );
  },
  setMeta(state, meta) {
    state.meta = meta;
  },
  appendItems(state, items) {
    state.items = state.items.concat(items);
  },
  deleteItem(state, id) {
    state.items = state.items.filter((el) => el.id != id);
    state.meta.total--;
  },
};
export const actions = {
  async getItems({ commit, state }, page = 1, per_page = 100) {
    const res = this.$axios
      .$get(`/vendors?per_page=${per_page}&page=${page}&include=logo`)
      .then((res) => {
        if (page !== 1) {
          commit("appendItems", res.data);
        } else {
          commit("setItems", res.data);
        }
        commit("setMeta", res.meta);
      });

    return res;
  },
  async getItem({ commit, state }, itemID) {
    const { data: item } = await this.$axios.$get(
      `/vendors/${itemID}&include=logo`
    );
    commit("setItem", item);
  },
};
