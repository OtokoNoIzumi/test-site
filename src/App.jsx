import React, { useState } from 'react'
import DeviceComparison from './components/DeviceComparison'
import BrandSelector from './components/BrandSelector'
import Summary from './components/Summary'

function App() {
  const [selectedBrand, setSelectedBrand] = useState('华为')
  const [selectedItems, setSelectedItems] = useState({})

  const handleBrandChange = (brand) => {
    setSelectedBrand(brand)
  }

  const handleItemSelect = (categoryName, quantity) => {
    setSelectedItems(prev => ({
      ...prev,
      [selectedBrand]: {
        ...prev[selectedBrand],
        [categoryName]: quantity
      }
    }))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">智能家居设备对比</h1>
      <div className="sticky top-0 bg-white z-10 pb-4">
        <BrandSelector 
          selectedBrand={selectedBrand}
          onBrandChange={handleBrandChange}
        />
        <Summary 
          selectedItems={selectedItems}
          selectedBrand={selectedBrand}
        />
      </div>
      <DeviceComparison 
        selectedBrand={selectedBrand}
        onItemSelect={handleItemSelect}
        selectedItems={selectedItems}
      />
    </div>
  )
}

export default App