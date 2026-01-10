
import ProductItem from "./ProductItem";

export default function ProductSection() {
    const itemColletion = [1,2,3,4,5,6,7,8,9,10]
    const maxItems = 10;

    return (
      <section className="bg-slate-100 border border-slate-300 rounded-lg p-5">
        <h2 className="text-2xl font-semibold">Recomendation :</h2>
        <div className="grid justify-center grid-cols-5 gap-5 mt-2">
          {
            itemColletion.map((item) => {
              return(
                <ProductItem key={item}/>
              )
            })
          }
        </div>
      </section>
    );
}