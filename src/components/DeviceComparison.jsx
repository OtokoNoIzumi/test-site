import React from 'react'

const devices = [
  {
    category: '智能开关',
    items: [
      { name: '双键开关', image: 'https://via.placeholder.com/150?text=Double+Switch' },
      { name: '三键开关', image: 'https://via.placeholder.com/150?text=Triple+Switch' },
      { name: '单火开关', image: 'https://via.placeholder.com/150?text=Single+Wire+Switch' },
    ],
    brands: {
      '华为': { price: 199, features: ['语音控制', 'APP远程控制', '定时功能'], productName: '华为智能开关Pro套装' },
      '小米': { price: 159, features: ['语音控制', 'APP远程控制', '电量统计'], productName: '小米智能开关2套装' },
      '苹果': { price: 299, features: ['HomeKit集成', '语音控制', 'APP远程控制'], productName: 'Apple HomeKit开关套装', noSingleWire: true }
    }
  },
  {
    category: '智能灯',
    items: [
      { name: 'LED灯泡', image: 'https://via.placeholder.com/150?text=LED+Bulb' },
      { name: '灯带', image: 'https://via.placeholder.com/150?text=Light+Strip' },
      { name: '吸顶灯', image: 'https://via.placeholder.com/150?text=Ceiling+Light' },
    ],
    brands: {
      '华为': { price: 299, features: ['调光调色', '语音控制', '场景模式'], productName: '华为智能照明套装' },
      '小米': { price: 249, features: ['调光调色', '语音控制', '日出日落模式'], productName: '小米Yeelight套装' },
      '苹果': { price: 399, features: ['HomeKit集成', '调光调色', '自适应照明'], productName: 'Apple HomeKit照明套装' }
    }
  },
  {
    category: '智能窗帘',
    items: [
      { name: '电动窗帘', image: 'https://via.placeholder.com/150?text=Motorized+Curtain' },
      { name: '智能窗帘轨道', image: 'https://via.placeholder.com/150?text=Smart+Curtain+Track' },
      { name: '遥控器', image: 'https://via.placeholder.com/150?text=Remote+Control' },
    ],
    brands: {
      '华为': { price: 799, features: ['静音电机', 'APP控制', '定时功能'], productName: '华为智能窗帘套装' },
      '小米': { price: 699, features: ['静音电机', 'APP控制', '光线感应'], productName: '小米智能窗帘套装' },
      '苹果': { price: 999, features: ['HomeKit集成', '静音电机', '场景联动'], productName: 'Apple HomeKit窗帘套装' }
    }
  },
  {
    category: '智能门锁',
    items: [
      { name: '指纹锁', image: 'https://via.placeholder.com/150?text=Fingerprint+Lock' },
      { name: '密码锁', image: 'https://via.placeholder.com/150?text=Password+Lock' },
      { name: 'NFC锁', image: 'https://via.placeholder.com/150?text=NFC+Lock' },
    ],
    brands: {
      '华为': { price: 1299, features: ['多重解锁方式', '远程控制', '临时密码'], productName: '华为智能门锁Pro' },
      '小米': { price: 999, features: ['指纹解锁', 'APP控制', '异常报警'], productName: '小米智能门锁2' },
      '苹果': { price: 1599, features: ['HomeKit集成', 'Face ID解锁', '访客管理'], productName: 'Apple HomeKit门锁' }
    }
  },
  {
    category: '智能摄像头',
    items: [
      { name: '室内摄像头', image: 'https://via.placeholder.com/150?text=Indoor+Camera' },
      { name: '室外摄像头', image: 'https://via.placeholder.com/150?text=Outdoor+Camera' },
      { name: '门铃摄像头', image: 'https://via.placeholder.com/150?text=Doorbell+Camera' },
    ],
    brands: {
      '华为': { price: 599, features: ['1080P高清', '夜视功能', '双向通话'], productName: '华为智能摄像头套装' },
      '小米': { price: 499, features: ['360度旋转', '人形检测', '云存储'], productName: '小米智能摄像头家庭套装' },
      '苹果': { price: 799, features: ['HomeKit Secure Video', '面部识别', '加密传输'], productName: 'Apple HomeKit摄像头套装' }
    }
  },
  {
    category: '智能插座',
    items: [
      { name: '单口插座', image: 'https://via.placeholder.com/150?text=Single+Outlet' },
      { name: '多口插座', image: 'https://via.placeholder.com/150?text=Multi+Outlet' },
      { name: 'USB插座', image: 'https://via.placeholder.com/150?text=USB+Outlet' },
    ],
    brands: {
      '华为': { price: 199, features: ['远程控制', '定时开关', '过载保护'], productName: '华为智能插座套装' },
      '小米': { price: 159, features: ['电量统计', 'APP控制', '过热保护'], productName: '小米智能插座套装' },
      '苹果': { price: 249, features: ['HomeKit集成', '能耗监测', '自动化控制'], productName: 'Apple HomeKit插座套装' }
    }
  },
  {
    category: '智能温控器',
    items: [
      { name: '中央空调控制器', image: 'https://via.placeholder.com/150?text=Central+AC+Controller' },
      { name: '地暖控制器', image: 'https://via.placeholder.com/150?text=Floor+Heating+Controller' },
      { name: '新风控制器', image: 'https://via.placeholder.com/150?text=Fresh+Air+Controller' },
    ],
    brands: {
      '华为': { price: 499, features: ['温度自学习', '远程控制', '节能模式'], productName: '华为智能温控套装' },
      '小米': { price: 399, features: ['温湿度感应', 'APP控制', '定时设置'], productName: '小米智能恒温器套装' },
      '苹果': { price: 599, features: ['HomeKit集成', '地理位置感知', '场景联动'], productName: 'Apple HomeKit温控套装' }
    }
  },
  {
    category: '智能传感器',
    items: [
      { name: '门窗传感器', image: 'https://via.placeholder.com/150?text=Door+Window+Sensor' },
      { name: '人体传感器', image: 'https://via.placeholder.com/150?text=Motion+Sensor' },
      { name: '温湿度传感器', image: 'https://via.placeholder.com/150?text=Temperature+Humidity+Sensor' },
    ],
    brands: {
      '华为': { price: 299, features: ['低功耗设计', '即时报警', '场景联动'], productName: '华为智能传感器套装' },
      '小米': { price: 249, features: ['多功能集成', 'APP通知', '长续航'], productName: '小米智能传感器套装' },
      '苹果': { price: 399, features: ['HomeKit集成', '加密通信', '自动化触发'], productName: 'Apple HomeKit传感器套装' }
    }
  },
  {
    category: '智能扫地机器人',
    items: [
      { name: '扫地机器人', image: 'https://via.placeholder.com/150?text=Robot+Vacuum' },
      { name: '集尘站', image: 'https://via.placeholder.com/150?text=Dust+Collection+Station' },
      { name: '拖地机器人', image: 'https://via.placeholder.com/150?text=Mopping+Robot' },
    ],
    brands: {
      '华为': { price: 2999, features: ['激光导航', '自动回充', 'APP控制'], productName: '华为智能清洁套装' },
      '小米': { price: 2499, features: ['视觉导航', '自动倒垃圾', '智能规划'], productName: '小米扫拖一体机套装' },
      '苹果': { price: 3499, features: ['HomeKit集成', 'AI障碍识别', '多楼层地图'], productName: 'Apple HomeKit清洁套装' }
    }
  },
  {
    category: '智能音箱',
    items: [
      { name: '智能音箱', image: 'https://via.placeholder.com/150?text=Smart+Speaker' },
      { name: '智能显示屏', image: 'https://via.placeholder.com/150?text=Smart+Display' },
      { name: '智能音响', image: 'https://via.placeholder.com/150?text=Smart+Sound+System' },
    ],
    brands: {
      '华为': { price: 699, features: ['AI语音助手', '音质优化', '智能家居控制中心'], productName: '华为智能音频套装' },
      '小米': { price: 599, features: ['多房间音频', '语音控制', '蓝牙5.0'], productName: '小米智能音箱套装' },
      '苹果': { price: 899, features: ['Siri集成', '空间音频', 'AirPlay 2'], productName: 'Apple HomePod套装' }
    }
  }
]

function DeviceComparison({ selectedBrand, onItemSelect, selectedItems }) {
  return (
    <div className="space-y-8">
      {devices.map((device) => (
        <div key={device.category} className="bg-white shadow rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4">{device.category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {device.items.map((item) => (
              <div key={item.name} className="text-center">
                <img src={item.image} alt={item.name} className="w-full h-32 object-cover rounded mb-2" />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.entries(device.brands).map(([brand, info]) => {
              const isSelected = brand === selectedBrand
              return (
                <div key={brand} className={`border p-4 rounded ${isSelected ? 'ring-2 ring-blue-500 bg-blue-50' : ''}`}>
                  <h3 className="font-medium text-lg mb-2">{info.productName}</h3>
                  <p className="text-xl font-bold mb-2">¥{info.price}</p>
                  <ul className="text-sm mb-4">
                    {info.features.map((feature, index) => (
                      <li key={index} className="mb-1">• {feature}</li>
                    ))}
                  </ul>
                  {isSelected && (
                    <div className="flex items-center justify-center">
                      <input
                        type="number"
                        className="border rounded px-2 py-1 w-16 text-center"
                        value={selectedItems[brand]?.[device.category] || 0}
                        onChange={(e) => onItemSelect(device.category, parseInt(e.target.value) || 0)}
                        min="0"
                      />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}

export default DeviceComparison