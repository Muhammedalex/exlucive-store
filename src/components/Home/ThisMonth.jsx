import ProductCard from "../Elements/ProductCard"
import Sections from "../Elements/Sections"

const ThisMonth = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full my-10 border-b mx- gap-14 border-line-c">
      <Sections 
       title="This Month"
       supTitle = 'Best Selling Products'
       flash={false}
       slider={false}
       view={true}
      />
     <div className="flex flex-wrap items-center justify-center mb-10 gap-7 lg:flex-nowrap lg:gap-5">
     <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
     </div>
    </div>
  )
}

export default ThisMonth
