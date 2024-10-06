import { Component } from '@angular/core';

interface Device {
  name: string;
  brands: {
    [key: string]: {
      price: string;
      features: string[];
    };
  };
}

@Component({
  selector: 'ns-device-comparison',
  templateUrl: './device-comparison.component.html',
  styleUrls: ['./device-comparison.component.css']
})
export class DeviceComparisonComponent {
  devices: Device[] = [
    {
      name: '智能开关',
      brands: {
        '华为': { price: '¥99', features: ['语音控制', 'APP远程控制', '定时功能'] },
        '小米': { price: '¥79', features: ['语音控制', 'APP远程控制', '电量统计'] },
        '苹果': { price: '¥199', features: ['HomeKit集成', '语音控制', 'APP远程控制'] }
      }
    },
    {
      name: '智能灯',
      brands: {
        '华为': { price: '¥129', features: ['调光调色', '语音控制', '场景模式'] },
        '小米': { price: '¥99', features: ['调光调色', '语音控制', '日出日落模式'] },
        '苹果': { price: '¥249', features: ['HomeKit集成', '调光调色', '自适应照明'] }
      }
    },
    {
      name: '智能窗帘',
      brands: {
        '华为': { price: '¥599', features: ['静音电机', 'APP控制', '定时功能'] },
        '小米': { price: '¥499', features: ['静音电机', 'APP控制', '光线感应'] },
        '苹果': { price: '¥799', features: ['HomeKit集成', '静音电机', '场景联动'] }
      }
    }
  ];

  brands = ['华为', '小米', '苹果'];
}