import Special from "../Special/Special";


const MySelf = ({assets}) => {
    return (
        <div className="grandpa">
            <h2>MySelf</h2>
            <section className="flex">
                <Special assets={assets}></Special>
            </section>
        </div>
    );
};

export default MySelf;