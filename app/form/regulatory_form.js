Vue.use(VeeValidate);
VeeValidate.Validator.extend("polite", {
  getMessage: (field) => `You need to be polite in the ${field} field`,
  validate: (value) => value.toLowerCase().indexOf("please") !== -1,
});
new Vue({
  el: "#app",
  data: {
    form: {
      name: "",
      message: "",
      inquiry_type: "",
      logrocket_usecases: [],
      terms: false,
      concepts: [],
      js_awesome: "",
    },
    options: {
      inquiry: [
        { value: "feature", text: "Feature Request" },
        { value: "bug", text: "Bug Report" },
        { value: "support", text: "Support" },
      ],
    },
  },
});
