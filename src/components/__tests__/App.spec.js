import { shallowMount } from "@vue/test-utils";
import App from "../App.vue";

describe("App.vue", () => {
  it("renders App", () => {
    const wrapper = shallowMount(App, {
      propsData: {  }
    });
    expect(wrapper.findAll("h1").length).toBe(1);
  });
});
