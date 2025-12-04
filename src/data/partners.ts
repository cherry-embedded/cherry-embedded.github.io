import type { Partner } from '../types/product'

export const partners: Partner[] = [
  // 示例合作伙伴数据，可以根据实际情况填充
  {
    id: 'partner1',
    name: '合作伙伴 1',
    logo: '/logos/partner1.png',
    website: 'https://example1.com',
    description: '领先的嵌入式解决方案提供商'
  },
  {
    id: 'partner2',
    name: '合作伙伴 2',
    logo: '/logos/partner2.png',
    website: 'https://example2.com',
    description: '专业的工业自动化厂商'
  },
  {
    id: 'partner3',
    name: '合作伙伴 3',
    logo: '/logos/partner3.png',
    website: 'https://example3.com',
    description: '知名半导体公司'
  },
  {
    id: 'partner4',
    name: '合作伙伴 4',
    logo: '/logos/partner4.png',
    website: 'https://example4.com',
    description: '创新科技企业'
  },
  {
    id: 'partner5',
    name: '合作伙伴 5',
    logo: '/logos/partner5.png',
    website: 'https://example5.com',
    description: '系统集成商'
  },
  {
    id: 'partner6',
    name: '合作伙伴 6',
    logo: '/logos/partner6.png',
    website: 'https://example6.com',
    description: '物联网方案商'
  }
]

export const getPartnerById = (id: string): Partner | undefined => {
  return partners.find(partner => partner.id === id)
}
