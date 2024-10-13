import Friend from "../Friend/Friend";
import Special from "../Special/Special";


const Cousin = ({name, assets}) => {
    return (
        <div className="grandpa">
            <h2>Cousin</h2>
             <p>{name}</p>
             <section>
                   {
                    assets && <Special assets={assets}></Special>
                   }
                   {
                    name==='Toua'&& <Friend></Friend>
                   }
             </section>
        </div>
    );
};

export default Cousin;