const NewHeader = ({ headText, leftChild, rightChild }) => {
  return (
    <nav className="flex items-center justify-between flex-wrap py-6">
      <div className="flex items-center flex-shrink-0 text-black">
        <span className="font-semibold text-2xl tracking-tight">
          {headText}
        </span>
      </div>
      <div className="block">{rightChild}</div>
    </nav>
  );
};

export default NewHeader;
