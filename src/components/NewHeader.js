const NEwHeader = ({ headText, leftChild, rightChild }) => {
  return (
    <header>
      <div className="head_btn_left">{leftChild}</div>
      <div>{headText}</div>
      <div className="head_text">{}</div>
      <div className="head_btn_right">{rightChild}</div>
    </header>
  );
};

export default NEwHeader;
