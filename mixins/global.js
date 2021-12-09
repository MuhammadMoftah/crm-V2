import Vue from "vue";
var mixin = {
  data() {
    return {
      mixLoading: false,
      mixinObserval: true,
    };
  },
  methods: {
    $permCheck(permission) {
      if (this.$auth.user.roles_permissions.find((el) => el.name == permission))
        return true;
      return false;
    },
    $objectToFormData(object) {
      let data = new FormData();
      for (let i in object) {
        if (object[i] && !Array.isArray(object[i])) {
          data.append(i, object[i]);
        }

        if (Array.isArray(object[i])) {
          for (let i2 in object[i]) {
            data.append(`${i}[]`, object[i][i2]);
          }
        }
      }
      return data;
    },
    $closeModal() {
      this.$store.commit("global/closeModal");
    },
    $errorHandler(err, customMessage) {
      if (customMessage) {
        this.$toast.error(customMessage);
        return;
      }
      if (typeof err.response?.data.errors === "object") {
        for (let i in err.response.data.errors) {
          this.$toast.error(err.response.data.errors[i]);
        }
      } else {
        this.$toast.error("Some Error happed!");
      }
    },
    $successHandler(customMessage) {
      if (customMessage) {
        this.$closeModal();
        this.$toast.success(customMessage);
        return;
      }
      this.$closeModal();
      this.$toast.success("Request successfully done");
    },
    $generateID(length) {
      let result = "";
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      const charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      // console.log(result);

      return result;
    },
  },
};

Vue.mixin(mixin);
export default mixin;
