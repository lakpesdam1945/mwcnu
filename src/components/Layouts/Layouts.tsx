interface sizeLayout {
  children?: any;
}

function Layouts(propsIn: sizeLayout) {
  const props = { ...propsIn };
  return (
    <div className="w-full min-h-screen bg-white max-w-mobile mx-auto shadow-lg">
      {props.children}
    </div>
  );
}

export default Layouts;
