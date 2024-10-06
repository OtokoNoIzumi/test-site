import React from 'react'

const devices = [
  {
    category: '智能开关',
    brands: {
      '华为': { price: 199, productName: '华为智能开关Pro套装' },
      '小米': { price: 159, productName: '小米智能开关2套装' },
      '苹果': { price: 299, productName: 'Apple HomeKit开关套装', noSingleWire: true }
    }
  },
  {
    category: '智能灯',
    brands: {
      '华为': { price: 299, productName: '华为智能照明套装' },
      '小米': { price: 249, productName: '小米Yeelight套装' },
      '苹果': { price: 399, productName: 'Apple HomeKit照明套装' }
    }
  },
  {
    category: '智能窗帘',
    brands: {
      '华为': { price: 799, productName: '华为智能窗帘套装' },
      '小米': { price: 699, productName: '小米智能窗帘套装' },
      '苹果': { price: 999, productName: 'Apple HomeKit窗帘套装' }
    }
  },
  {
    category: '智能门锁',
    brands: {
      '华为': { price: 1299, productName: '华为智能门锁Pro' },
      '小米': { price: 999, productName: '小米智能门锁2' },
      '苹果': { price: 1599, productName: 'Apple HomeKit门锁' }
    }
  },
  {
    category: '智能摄像头',
    brands: {
      '华为': { price: 599, productName: '华为智能摄像头套装' },
      '小米': { price: 499, productName: '小米智能摄像头家庭套装' },
      '苹果': { price: 799, productName: 'Apple HomeKit摄像头套装' }
    }
  },
  {
    category: '智能插座',
    brands: {
      '华为': { price: 199, productName: '华为智能插座套装' },
      '小米': { price: 159, productName: '小米智能插座套装' },
      '苹果': { price: 249, productName: 'Apple HomeKit插座套装' }
    }
  },
  {
    category: '智能温控器',
    brands: {
      '华为': { price: 499, productName: '华为智能温控套装' },
      '小米': { price: 399, productName: '小米智能恒温器套装' },
      '苹果': { price: 599, productName: 'Apple HomeKit温控套装' }
    }
  },
  {
    category: '智能传感器',
    brands: {
      '华为': { price: 299, productName: '华为智能传感器套装' },
      '小米': { price: 249, productName: '小米智能传感器套装' },
      '苹果': { price: 399, productName: 'Apple HomeKit传感器套装' }
    }
  },
  {
    category: '智能扫地机器人',
    brands: {
      '华为': { price: 2999, productName: '华为智能清洁套装' },
      '小米': { price: 2499, productName: '小米扫拖一体机套装' },
      '苹果': { price: 3499, productName: 'Apple HomeKit清洁套装' }
    }
  },
  {
    category: '智能音箱',
    brands: {
      '华为': { price: 699, productName: '华为智能音频套装' },
      '小米': { price: 599, productName: '小米智能音箱套装' },
      '苹果': { price: 899, productName: 'Apple HomePod套装' }
    }
  }
]

function Summary({ selectedItems, selectedBrand }) {
  const totalPrice = Object.entries(selectedItems).reduce((brandTotal, [brand, items]) => {
    const brandSum = Object.entries(items).reduce((sum, [categoryName, quantity]) => {
      const device = devices.find(d => d.category === categoryName)
      if (device.brands[brand].noSingleWire && brand === '苹果') {
        return sum + (device.brands[brand].price * quantity * 2 / 3) // 减去单火开关的价格
      }
      return sum + (device.brands[brand].price * quantity)
    }, 0)
    return {
      ...brandTotal,
      [brand]: brandSum
    }
  }, {})

  return (
    <div className="bg-white shadow rounded-lg p-4 mb-4">
      <h3 className="text-lg font-semibold mb-2">已选择的产品</h3>
      <div className="max-h-40 overflow-y-auto mb-2">
        {Object.entries(selectedItems).map(([brand, items]) => (
          <div key={brand} className="mb-2">
            <h4 className="font-medium">{brand}</h4>
            {Object.entries(items).map(([categoryName, quantity]) => {
              if (quantity > 0) {
                const device = devices.find(d => d.category === categoryName)
                const brandInfo = device.brands[brand]
                let price = brandInfo.price * quantity
                if (brandInfo.noSingleWire && brand === '苹果') {
                  price = price * 2 / 3 // 减去单火开关的价格
                }
                return (
                  <div key={categoryName} className="flex justify-between items-center text-sm">
                    <span>{brandInfo.productName}</span>
                    <span>
                      数量: {quantity}, 小计: ¥{price}
                    </span>
                  </div>
                )
              }
              return null
            })}
          </div>
        ))}
      </div>
      <div className="text-xl font-bold">
        总价: ¥{Object.values(totalPrice).reduce((a, b) => a + b, 0)}
      </div>
    </div>
  )
}

export default Summary