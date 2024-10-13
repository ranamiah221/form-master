import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";


const Special = ({assets}) => {
    const gift=useContext(AssetContext);
    return (
        <div className="grandpa">
            <h2>Special</h2>
            <p>has: {assets}</p>
            <p>too:{gift}</p>
        </div>
    );
};

export default Special;