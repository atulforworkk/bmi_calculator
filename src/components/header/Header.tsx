import { Link } from "react-router-dom";

type Props = {};

const Header = (props: Props) => {

  
  return (
    <div className="">
      <div className="flex  justify-between m-3">
        <Link to="/">
          <h1 className="text-xl font-semibold">
            <span className="mx-2 border-2 p-1">BMI</span>
            BMI calculator  </h1>
        </Link>
 
      </div>
    </div>
  );
};

export default Header;
