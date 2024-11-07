

function ProductTile({ singleProductTile }) {
  return (
    <div className="relative group border border-cyan-700 p-6 cursor-pointer">
      <div className="overflow-hidden w-full h-64"> {/* Explicit height */}
        <img 
          src={singleProductTile?.thumbnail}
          alt={singleProductTile?.title}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-125" 
        />
      </div>
    </div>
  );
}

export default ProductTile;
