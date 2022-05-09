import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import { StoreFactory } from "./test/TestUtils";

const setup = (props = {}) => {
  const Store = StoreFactory(props);
  const wrapper = shallow(<App store={Store} />)
    .dive()
    .dive();
  return wrapper;
};

describe("redux property", () => {
  test("has access to success state", () => {
    const success = true;
    const wrapper = setup({ success });
    const successProps = wrapper.instance().props.success;
    expect(successProps).toBe(success);
  });
});
