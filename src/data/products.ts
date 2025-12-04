import type { Product } from '../types/product'

export const products: Product[] = [
  {
    id: 'cherryusb',
    name: 'CherryUSB',
    title: '',
    shortDescription: '小而美的、可移植性高的、用于嵌入式系统（带 USB IP）的高性能 USB 主从协议栈',
    description: 'CherryUSB 是一个小而美的、可移植性高的、用于嵌入式系统（带 USB IP）的高性能 USB 主从协议栈',
    icon: '🔌',
    image: '/images/CherryUSB.svg',
    tags: ['USB', 'USB HOST', 'USB DEVICE'],
    features: [
      '高性能，高移植性，高易用性，高稳定性，低占用率',
      '支持主机、从机、OTG 模式',
      '简洁易用的API设计',
      '全方面的 CLASS 支持，包括 HID、MSC、CDC、UVC、UAC 、RNDIS、ECM等',
      '全方面的开源组件适配，包括 RT-Thread、LWIP、FATFS、NUTTX、ESP-IDF 等',
      '全方面的商业性 IP 支持，包括 OHCI、EHCI、DWC2、MUSB 、FOTG210、XHCI 等',
      '活跃的开源社区支持',
      '完善的示例代码和文档',
      '支持多种 RTOS'
    ],
    github: 'https://github.com/cherry-embedded/CherryUSB',
    currentVersion: 'v1.5.3',
    documentation: 'https://cherryusb.readthedocs.io',
    pricing: {
      type: 'subproducts',
      description: '提供多种基于 CherryUSB 的商业授权方案，满足不同规模项目需求',
      items: [
        {
          id: 'cherryusb-a',
          name: 'CherryUSB 主机 UVC/UAC - EHCI 版本',
          description: '包含 CherryUSB 主机 UVC/UAC 框架， EHCI ISO 驱动',
          price: '¥?',
          features: [],
          url: ''
        },
        {
          id: 'cherryusb-b',
          name: 'CherryUSB 主机 UVC/UAC - DWC2 版本',
          description: '包含 CherryUSB 主机 UVC/UAC 框架， DWC2 ISO 驱动',
          price: '¥?',
          features: [],
        },
        {
          id: 'cherryusb-c',
          name: 'CherryUSB 主机 UVC/UAC - MUSB 版本',
          description: '包含 CherryUSB 主机 UVC/UAC 框架， MUSB ISO 驱动',
          price: '¥?',
          features: [],
          url: ''
        },
        {
          id: 'cherryusb-d',
          name: 'CherryUSB MTP 设备类',
          description: '',
          price: '¥?',
          features: ['多文件支持', '多目录支持', '动态更新文件并同步'],
          url: ''
        }
      ]
    }
  },
  {
    id: 'cherryecat',
    name: 'CherryECAT',
    title: '',
    shortDescription: '小而美的、高实时性、低抖动的 EtherCAT 主机协议栈，专为跑在 RTOS 下的 MCU 设计',
    description: 'CherryECAT 是一个小而美的、高实时性、低抖动的 EtherCAT 主机协议栈，专为跑在 RTOS 下的 MCU 设计',
    icon: '🌐',
    tags: ['EtherCAT', 'Industrial', 'RTOS'],
    features: [
      '异步队列式传输（一次传输可以携带多个 datagram）',
      '零拷贝技术：直接使用 enet tx/rx buffer 填充和解析 ethercat 数据',
      '支持热插拔: 自动扫描总线, 拓扑结构发生变化时自动更新 Slave 信息',
      '支持自动监控 Slave 状态',
      '支持分布式时钟',
      '支持 COE/FOE/EOE 协议',
      'DC 抖动 < 3us',
      '支持多周期'
    ],
    github: 'https://github.com/cherry-embedded/CherryECAT',
    currentVersion: 'v1.1.0',
    documentation: 'https://cherryecat.readthedocs.io',
    pricing: {
      type: 'subproducts',
      description: '提供多种基于 CherryECAT 的商业授权方案，满足不同规模项目需求',
      items: [
        {
          id: 'cherryecat-a',
          name: 'CherryECAT FOE/EOE 扩展包',
          description: 'EtherCAT主站协议栈的 FOE/EOE 功能扩展包',
          price: '¥?',
          features: [],
          url: ''
        },
      ]
    }
  },
  {
    id: 'cherrysh',
    name: 'CherrySH',
    title: '',
    shortDescription: '专为嵌入式应用程序而设计的微型Shell',
    description: 'CherrySH 是一个专为嵌入式应用程序而设计的微型Shell',
    icon: '💻',
    tags: ['Shell', 'Terminal', 'CLI'],
    features: [
      '裸机和 RTOS 支持',
      '支持多种接口，包括 UART、USB CDC、ENET 等',
      'TAB 键自动补全',
      '支持环境变量',
      '支持历史记录',
      '支持复合键输入，包括 CTRL 、ALT 、F1 ~ F12、HOME、END等',
    ],
    github: 'https://github.com/cherry-embedded/CherrySH',
    currentVersion: 'v1.1.0',
  },
  {
    id: 'cherryrb',
    name: 'CherryRB',
    title: '',
    shortDescription: '高效、易用的环形缓冲区，其原理与kfifo一致',
    description: 'CherryDAP 是一个高效、易用的环形缓冲区，其原理与kfifo一致',
    icon: '🔧',
    tags: ['ringbuffer'],
    features: [
      '单消费者单生产者模式下的无锁操作',
      '支持 DMA 读写',
      '读写指针独立互不影响',
    ],
    github: 'https://github.com/cherry-embedded/CherryRB',
    currentVersion: 'v1.0.0'
  },
  {
    id: 'cherrydap',
    name: 'CherryDAP',
    title: '',
    shortDescription: 'DAPLink template based on CherryUSB and ARMmbed DAPLink',
    description: 'CherryDAP 是一个基于 CherryUSB 和 ARMmbed DAPLink 的 DAPLink 模板',
    icon: '🔧',
    tags: ['CMSIS-DAP', 'debugger', 'jtag', 'swd'],
    features: [
      'CMSIS DAP version 2.1, 仅支持 winusb',
      '支持 JTAG、SWD 调试协议',
      '虚拟串口 CDC ACM 支持',
      'HID、MSC、WEBUSB 拓展',
      '提供开源硬件参考设计',
    ],
    github: 'https://github.com/cherry-embedded/CherryDAP',
    documentation: 'https://cherrydap.cherry-embedded.org/',
    currentVersion: 'v2.4.3'
  },
  {
    id: 'hslink-pro',
    name: 'HSLink-pro',
    title: '',
    shortDescription: '',
    description: 'HSLink-pro 是一个基于 HPM5301 设计的 CMSIS-DAP 调试器，支持 JTAG 和 SWD 调试协议',
    icon: '🔧',
    image: '/images/hslink-pro.png',

    tags: ['CMSIS-DAP', 'debugger', 'jtag', 'swd'],
    features: [
      '高速 USB',
      '高波特率虚拟串口',
      '支持 SPI /GPIO 模拟 SWD/JTAG',
    ],
    github: 'https://github.com/cherry-embedded/HSLink-hardware',
    currentVersion: 'v1.2.1'
  },
  {
    id: 'hscant',
    name: 'HSCanT',
    title: '',
    shortDescription: '',
    description: 'HSCanT 是一个基于 HPM5321 设计的 4 路 CAN 分析仪',
    icon: '🔧',
    image: '/images/hscant.png',
    tags: ['CAN'],
    features: [
      '4 路 CAN 接口，支持 CAN FD',
      '高速 USB',
      '博世 CAN IP，大容量 RAM 缓存，不丢包，最高 8Mbps',
      '支持 gs-usb, slcan 通信协议',
      '支持多种平台：Windows(ECUBus-Pro)、Linux(socketcan)',
    ],
    github: 'https://github.com/cherry-embedded/HSCanT-hardware',
    documentation: 'https://hscant.cherry-embedded.org/',
    currentVersion: 'v1.1.0'
  },
  {
    id: 'cherrypryer',
    name: 'CherryPryer',
    title: '',
    shortDescription: '',
    description: 'CherryPryer 是一款基于 CherryUSB 的专业的HID（人机接口设备）延迟测试工具，专门用于精确测量键盘、鼠标等输入设备的响应延迟。该工具提供准确的按压-释放时间测量和详细的统计分析',
    icon: '🔧',
    tags: ['CherryUSB', 'HID', 'Latency Test', 'Keyboard', 'Mouse'],
    features: [
    ],
    github: '',
    documentation: '',
    currentVersion: 'v1.0.0'
  },
  {
    id: 'cherrydesc',
    name: 'CherryDescriptor',
    title: '',
    shortDescription: '为 CherryUSB 打造的描述符生成工具',
    description: 'CherryDescriptor 是一个专门为 CherryUSB 打造的描述符生成工具',
    icon: '🔧',
    tags: ['CherryUSB', 'Descriptor'],
    features: [
      '支持所有常见 USB 设备类描述符生成',
      '支持生成 CherryUSB 以及其他协议栈格式（纯 C 数组）',
      '图形化界面，操作简单直观',
      '支持工程导入导出'
    ],
    github: 'https://desc.cherry-embedded.org/',
    documentation: '',
    currentVersion: 'v1.0.0'
  },
  {
    id: 'cherryusbwifi',
    name: 'CherryUSBWIFI',
    title: '',
    shortDescription: '',
    description: 'CherryUSBWIFI 是一款基于 CherryUSB 的免驱 WIFI/BLE 适配器，可广泛应用于各种嵌入式系统和开发板，实现便捷的无线网络连接，免受私有驱动带来的烦恼',
    icon: '🔧',
    image: '/images/cherryusbwifi.png',
    tags: ['CherryUSB', 'WIFI', 'BLE', 'RNDIS', 'ECM'],
    features: [
      '唯一可运行在低内存 MCU 上的免驱 WIFI/BLE 适配器',
      '网络通信采用 RNDIS 或者 ECM 网络协议',
      'WIFI6/BLE5.4 双模无线连接',
      '使用 CDC ACM 配置 WIFI参数',
      '最高 80Mbps 的 WIFI 传输速率（代码放 RAM 的情况下）',
      '主机端只需要透传网络数据，免受私有驱动带来的大内存占用',
    ],
    github: '',
    documentation: '',
    currentVersion: '',
    pricing: {
      type: 'versions',
      description: '',
      items: [
        {
          id: 'cherryusbwifi-a',
          name: '基于 BL616 的 USB WIFI/BLE 模组',
          description: '',
          price: '¥?',
          features: [],
          url: 'https://item.taobao.com/item.htm?ft=t&id=997015239849'
        },
      ]
    }

  },
]

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id)
}
