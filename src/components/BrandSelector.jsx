import React from 'react'

function BrandSelector({ selectedBrand, onBrandChange }) {
  const brands = ['华为', '小米', '苹果']

  return (
    <div className="flex justify-center space-x-4 mb-4">
      {brands.map(brand => (
        <button
          key={brand}
          className={`px-4 py-2 rounded ${
            selectedBrand === brand
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => onBrandChange(brand)}
        >
          {brand}
        </button>
      ))}
    </div>
  )
}

export default BrandSelector