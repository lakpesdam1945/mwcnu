interface Style {
  padding?: string;
  background?: string;
  children?: any;
}

const defaultProps = {
  padding: "px-4",
  background: "",
  children: "Hello From Nahdlatul Ulama Rancaekek",
};

function Container(propsIn: Style) {
  const props = { ...defaultProps, ...propsIn };
  return (
    <div
      className={
        "mx-auto w-full max-w-mobile" +
        " " +
        props.padding +
        " " +
        props.background
      }
    >
      {props.children}
    </div>
  );
}

export default Container;
