import { useNavigate } from "react-router-dom";


function ProductTile({ singleProductTile }) {

  const navigate = useNavigate()


  function handleNavigateToProductDetailsPage(getCorrectProductId){
    navigate(`/product-details/${getCorrectProductId}`)
    
  }
  return (
    <div className="relative group border border-cyan-700 p-6 cursor-pointer">
  <div className="overflow-hidden w-full h-64"> {/* Explicit height */}
    <img 
      src={singleProductTile?.thumbnail}
      alt={singleProductTile?.title}
      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-125" 
    />
  </div>

  <div className="flex items-center justify-between mt-4">
    <p className="font-bold text-gray-900 sm:text-sm text-xs md:text-base w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">
      {singleProductTile?.title}
    </p>
    <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-[14px]">
      ${singleProductTile?.price}
    </p>
  </div>

  <button 
    onClick={() => handleNavigateToProductDetailsPage(singleProductTile?.id)} 
    className="px-5 mt-5 w-full py-2 rounded-none bg-black text-white font-bold text-large"
  >
    View Details
  </button>
</div>

  );
}

export default ProductTile;
