import PropTypes from "prop-types";

export const findAttr = (wrapper, value) => {
  return wrapper.find(`[className="${value}"]`);
};
export const checkProps = (component, expectedProps) => {
  const PorpsError = PropTypes.checkPropTypes(
    component.PropTypes,
    expectedProps,
    "prop",
    component.name
  );
  expect(PorpsError).toBeUndefined();
};
