import React from 'react'

const devices = [
  {
    name: '智能开关',
    brands: {
      '华为': { price: 99, productName: '华为智能开关Pro' },
      '小米': { price: 79, productName: '小米智能开关2' },
      '苹果': { price: 199, productName: 'Apple HomeKit开关' }
    }
  },
  {
    name: '智能灯',
    brands: {
      '华为': { price: 129, productName: '华为智能灯泡' },
      '小米': { price: 99, productName: '小米Yeelight' },
      '苹果': { price: 249, productName: 'Apple HomeKit灯泡' }
    }
  },
  {
    name: '智能窗帘',
    brands: {
      '华为': { price: 599, productName: '华为智能窗帘' },
      '小米': { price: 499, productName: '小米智能窗帘' },
      '苹果': { price: 799, productName: 'Apple HomeKit窗帘' }
    }
  }
]

function SelectedItems({ selectedItems, selectedBrand }) {
  const totalPrice = Object.entries(selectedItems).reduce((brandTotal, [brand, items]) => {
    const brandSum = Object.entries(items).reduce((sum, [deviceName, quantity]) => {
      const device = devices.find(d => d.name === deviceName)
      return sum + (device.brands[brand].price * quantity)
    }, 0)
    return {
      ...brandTotal,
      [brand]: brandSum
    }
  }, {})

  return (
    <div className="bg-white shadow rounded-lg p-4 mt-8">
      <h3 className="text-lg font-semibold mb-4">已选择的产品</h3>
      {Object.entries(selectedItems).map(([brand, items]) => (
        <div key={brand} className="mb-4">
          <h4 className="font-medium text-lg mb-2">{brand}</h4>
          {Object.entries(items).map(([deviceName, quantity]) => {
            if (quantity > 0) {
              const device = devices.find(d => d.name === deviceName)
              const brandInfo = device.brands[brand]
              return (
                <div key={deviceName} className="flex justify-between items-center mb-2">
                  <span>{brandInfo.productName}</span>
                  <span>
                    数量: {quantity}, 小计: ¥{brandInfo.price * quantity}
                  </span>
                </div>
              )
            }
            return null
          })}
          <div className="text-right font-bold">
            {brand}总价: ¥{totalPrice[brand]}
          </div>
        </div>
      ))}
      <div className="text-xl font-bold mt-4">
        总价: ¥{Object.values(totalPrice).reduce((a, b) => a + b, 0)}
      </div>
    </div>
  )
}

export default SelectedItems