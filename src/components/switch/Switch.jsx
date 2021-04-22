const Switch = ({ test, children }) => {
  return children.filter((child) => {
    return child.props.value === test;
  });
};

export default Switch;
