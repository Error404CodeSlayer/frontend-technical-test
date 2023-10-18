
const Header = ({content}) => {
    return (
      <div className="p-4 flex justify-center bg-orange-400 rounded-b-2xl w-100 min-w-[250px]">
        {content && <h1 className="text-white text-2xl">{content}</h1>}
      </div>
    );
};

export default Header;