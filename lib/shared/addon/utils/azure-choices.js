// pulled from https://docs.microsoft.com/en-us/azure/aks/availability-zones
// uses display names so updating the list is as easy as grabbing the bullet point list on the linked page
export const regionsWithAZs = [
  'Australia East',
  'Brazil South',
  'Canada Central',
  'Central US',
  'East US',
  'East US 2',
  'France Central',
  'Germany West Central',
  'Japan East',
  'North Europe',
  'Southeast Asia',
  'South Central US',
  'UK South',
  'US Gov Virginia',
  'West Europe',
  'West US 2',
  'China North 3',
]
export let regions = {
  'AzurePublicCloud': [
    {
      'name':        'eastasia',
      'displayName': 'East Asia',
    },
    {
      'name':        'southeastasia',
      'displayName': 'Southeast Asia',
    },
    {
      'name':        'centralus',
      'displayName': 'Central US',
    },
    {
      'name':        'eastus',
      'displayName': 'East US',
    },
    {
      'name':        'eastus2',
      'displayName': 'East US 2',
    },
    {
      'name':        'westus',
      'displayName': 'West US',
    },
    {
      'name':        'northcentralus',
      'displayName': 'North Central US',
    },
    {
      'name':        'southcentralus',
      'displayName': 'South Central US',
    },
    {
      'name':        'northeurope',
      'displayName': 'North Europe',
    },
    {
      'name':        'westeurope',
      'displayName': 'West Europe',
    },
    {
      'name':        'germanynorth',
      'displayName': 'Germany North',
    },
    {
      'name':        'germanywestcentral',
      'displayName': 'Germany West Central',
    },
    {
      'name':        'japanwest',
      'displayName': 'Japan West',
    },
    {
      'name':        'japaneast',
      'displayName': 'Japan East',
    },
    {
      'name':        'brazilsouth',
      'displayName': 'Brazil South',
    },
    {
      'name':        'australiaeast',
      'displayName': 'Australia East',
    },
    {
      'name':        'australiasoutheast',
      'displayName': 'Australia Southeast',
    },
    {
      'name':        'southindia',
      'displayName': 'South India',
    },
    {
      'name':        'centralindia',
      'displayName': 'Central India',
    },
    {
      'name':        'westindia',
      'displayName': 'West India',
    },
    {
      'name':        'canadacentral',
      'displayName': 'Canada Central',
    },
    {
      'name':        'canadaeast',
      'displayName': 'Canada East',
    },
    {
      'name':        'uksouth',
      'displayName': 'UK South',
    },
    {
      'name':        'ukwest',
      'displayName': 'UK West',
    },
    {
      'name':        'westcentralus',
      'displayName': 'West Central US',
    },
    {
      'name':        'westus2',
      'displayName': 'West US 2',
    },
    {
      'name':        'koreacentral',
      'displayName': 'Korea Central',
    },
    {
      'name':        'koreasouth',
      'displayName': 'Korea South',
    },
    {
      'name':        'francecentral',
      'displayName': 'France Central',
    },
    {
      'name':        'francesouth',
      'displayName': 'France South',
    },
    {
      'name':        'australiacentral',
      'displayName': 'Australia Central',
    },
    {
      'name':        'australiacentral2',
      'displayName': 'Australia Central 2',
    },
    {
      'name':        'southafricanorth',
      'displayName': 'South Africa North',
    },
    {
      'name':        'southafricawest',
      'displayName': 'South Africa West',
    },
    {
      'name':        'switzerlandnorth',
      'displayName': 'Switzerland North',
    },
    {
      'name':        'switzerlandwest',
      'displayName': 'Switzerland West',
    },
    {
      'name':        'uaecentral',
      'displayName': 'UAE Central',
    },
    {
      'name':        'uaenorth',
      'displayName': 'UAE North',
    }
  ].sortBy('name'),
  'AzureGermanCloud': [
    {
      'name':        'germanynortheast',
      'displayName': 'Germany Northeast',
    },
    {
      'name':        'germanycentral',
      'displayName': 'Germany Central',
    }
  ].sortBy('name'),
  'AzureChinaCloud': [
    {
      'name':        'chinanorth',
      'displayName': 'China North',
    },
    {
      'name':        'chinaeast',
      'displayName': 'China East',
    },
    {
      'name':        'chinanorth2',
      'displayName': 'China North 2',
    },
    {
      'name':        'chinaeast2',
      'displayName': 'China East 2',
    },
    {
      'name':        'chinanorth3',
      'displayName': 'China North 3',
    }
  ].sortBy('name'),
  'AzureUSGovernmentCloud': [
    {
      'name':        'usgovvirginia',
      'displayName': 'US Gov Virginia',
    },
    {
      'name':        'usgovlowa',
      'displayName': 'US Gov lowa',
    },
    {
      'name':        'usgovarizona',
      'displayName': 'US Gov Arizona',
    },
    {
      'name':        'usgovTexas',
      'displayName': 'US GovTexas',
    }
  ].sortBy('name')
};

export let sizes = [
  { value: 'Basic_A0' },
  { value: 'Basic_A1' },
  { value: 'Basic_A2' },
  { value: 'Basic_A3' },
  { value: 'Basic_A4' },
  { value: 'Standard_A0' },
  { value: 'Standard_A1' },
  { value: 'Standard_A1_v2' },
  { value: 'Standard_A2' },
  { value: 'Standard_A2m_v2' },
  { value: 'Standard_A2_v2' },
  { value: 'Standard_A3' },
  { value: 'Standard_A4' },
  { value: 'Standard_A4m_v2' },
  { value: 'Standard_A4_v2' },
  { value: 'Standard_A5' },
  { value: 'Standard_A6' },
  { value: 'Standard_A7' },
  { value: 'Standard_A8' },
  { value: 'Standard_A8m_v2' },
  { value: 'Standard_A8_v2' },
  { value: 'Standard_A9' },
  { value: 'Standard_A10' },
  { value: 'Standard_A11' },
  { value: 'Standard_B1ms' },
  { value: 'Standard_B1s' },
  { value: 'Standard_B2ms' },
  { value: 'Standard_B2s' },
  { value: 'Standard_B4ms' },
  { value: 'Standard_B8ms' },
  { value: 'Standard_D1' },
  { value: 'Standard_D1_v2' },
  { value: 'Standard_D2' },
  { value: 'Standard_D2s_v3' },
  { value: 'Standard_D2_v2' },
  { value: 'Standard_D2_v2_Promo' },
  { value: 'Standard_D2_v3' },
  { value: 'Standard_D3' },
  { value: 'Standard_D3_v2' },
  { value: 'Standard_D3_v2_Promo' },
  { value: 'Standard_D4' },
  { value: 'Standard_D4s_v3' },
  { value: 'Standard_D4_v2' },
  { value: 'Standard_D4_v2_Promo' },
  { value: 'Standard_D4_v3' },
  { value: 'Standard_D5_v2' },
  { value: 'Standard_D5_v2_Promo' },
  { value: 'Standard_D8s_v3' },
  { value: 'Standard_D8_v3' },
  { value: 'Standard_D11' },
  { value: 'Standard_D11_v2' },
  { value: 'Standard_D11_v2_Promo' },
  { value: 'Standard_D12' },
  { value: 'Standard_D12_v2' },
  { value: 'Standard_D12_v2_Promo' },
  { value: 'Standard_D13' },
  { value: 'Standard_D13_v2' },
  { value: 'Standard_D13_v2_Promo' },
  { value: 'Standard_D14' },
  { value: 'Standard_D14_v2' },
  { value: 'Standard_D14_v2_Promo' },
  { value: 'Standard_D15_v2' },
  { value: 'Standard_D16s_v3' },
  { value: 'Standard_D16_v3' },
  { value: 'Standard_D32s_v3' },
  { value: 'Standard_D32_v3' },
  { value: 'Standard_D64s_v3' },
  { value: 'Standard_D64_v3' },
  { value: 'Standard_DS1' },
  { value: 'Standard_DS1_v2' },
  { value: 'Standard_DS2' },
  { value: 'Standard_DS2_v2' },
  { value: 'Standard_DS2_v2_Promo' },
  { value: 'Standard_DS3' },
  { value: 'Standard_DS3_v2' },
  { value: 'Standard_DS3_v2_Promo' },
  { value: 'Standard_DS4' },
  { value: 'Standard_DS4_v2' },
  { value: 'Standard_DS4_v2_Promo' },
  { value: 'Standard_DS5_v2' },
  { value: 'Standard_DS5_v2_Promo' },
  { value: 'Standard_DS11' },
  { value: 'Standard_DS11-1_v2' },
  { value: 'Standard_DS11_v2' },
  { value: 'Standard_DS11_v2_Promo' },
  { value: 'Standard_DS12' },
  { value: 'Standard_DS12-1_v2' },
  { value: 'Standard_DS12-2_v2' },
  { value: 'Standard_DS12_v2' },
  { value: 'Standard_DS12_v2_Promo' },
  { value: 'Standard_DS13' },
  { value: 'Standard_DS13-2_v2' },
  { value: 'Standard_DS13-4_v2' },
  { value: 'Standard_DS13_v2' },
  { value: 'Standard_DS13_v2_Promo' },
  { value: 'Standard_DS14' },
  { value: 'Standard_DS14-4_v2' },
  { value: 'Standard_DS14-8_v2' },
  { value: 'Standard_DS14_v2' },
  { value: 'Standard_DS14_v2_Promo' },
  { value: 'Standard_DS15_v2' },
  { value: 'Standard_E2s_v3' },
  { value: 'Standard_E2_v3' },
  { value: 'Standard_E4s_v3' },
  { value: 'Standard_E4-2s_v3' },
  { value: 'Standard_E4_v3' },
  { value: 'Standard_E8s_v3' },
  { value: 'Standard_E8-2s_v3' },
  { value: 'Standard_E8-4s_v3' },
  { value: 'Standard_E8_v3' },
  { value: 'Standard_E16s_v3' },
  { value: 'Standard_E16-4s_v3' },
  { value: 'Standard_E16-8s_v3' },
  { value: 'Standard_E16_v3' },
  { value: 'Standard_E20s_v3' },
  { value: 'Standard_E20_v3' },
  { value: 'Standard_E32s_v3' },
  { value: 'Standard_E32-8s_v3' },
  { value: 'Standard_E32-16s_v3' },
  { value: 'Standard_E32_v3' },
  { value: 'Standard_E64is_v3' },
  { value: 'Standard_E64i_v3' },
  { value: 'Standard_E64s_v3' },
  { value: 'Standard_E64-16s_v3' },
  { value: 'Standard_E64-32s_v3' },
  { value: 'Standard_E64_v3' },
  { value: 'Standard_F1' },
  { value: 'Standard_F1s' },
  { value: 'Standard_F2' },
  { value: 'Standard_F2s' },
  { value: 'Standard_F2s_v2' },
  { value: 'Standard_F4' },
  { value: 'Standard_F4s' },
  { value: 'Standard_F4s_v2' },
  { value: 'Standard_F8' },
  { value: 'Standard_F8s' },
  { value: 'Standard_F8s_v2' },
  { value: 'Standard_F16' },
  { value: 'Standard_F16s' },
  { value: 'Standard_F16s_v2' },
  { value: 'Standard_F32s_v2' },
  { value: 'Standard_F64s_v2' },
  { value: 'Standard_F72s_v2' },
  { value: 'Standard_G1' },
  { value: 'Standard_G2' },
  { value: 'Standard_G3' },
  { value: 'Standard_G4' },
  { value: 'Standard_G5' },
  { value: 'Standard_GS1' },
  { value: 'Standard_GS2' },
  { value: 'Standard_GS3' },
  { value: 'Standard_GS4' },
  { value: 'Standard_GS4-4' },
  { value: 'Standard_GS4-8' },
  { value: 'Standard_GS5' },
  { value: 'Standard_GS5-8' },
  { value: 'Standard_GS5-16' },
  { value: 'Standard_H8' },
  { value: 'Standard_H8m' },
  { value: 'Standard_H16' },
  { value: 'Standard_H16m' },
  { value: 'Standard_H16mr' },
  { value: 'Standard_H16r' },
  { value: 'Standard_L4s' },
  { value: 'Standard_L8s' },
  { value: 'Standard_L16s' },
  { value: 'Standard_L32s' },
  { value: 'Standard_M8ms' },
  { value: 'Standard_M8-2ms' },
  { value: 'Standard_M8-4ms' },
  { value: 'Standard_M16ms' },
  { value: 'Standard_M16-4ms' },
  { value: 'Standard_M16-8ms' },
  { value: 'Standard_M32ls' },
  { value: 'Standard_M32ms' },
  { value: 'Standard_M32ts' },
  { value: 'Standard_M32-8ms' },
  { value: 'Standard_M32-16ms' },
  { value: 'Standard_M64' },
  { value: 'Standard_M64ls' },
  { value: 'Standard_M64m' },
  { value: 'Standard_M64ms' },
  { value: 'Standard_M64s' },
  { value: 'Standard_M64-16ms' },
  { value: 'Standard_M64-32ms' },
  { value: 'Standard_M128' },
  { value: 'Standard_M128m' },
  { value: 'Standard_M128ms' },
  { value: 'Standard_M128s' },
  { value: 'Standard_M128-32ms' },
  { value: 'Standard_M128-64ms' },
  { value: 'Standard_NC6' },
  { value: 'Standard_NC6s_v2' },
  { value: 'Standard_NC6s_v3' },
  { value: 'Standard_NC12' },
  { value: 'Standard_NC12s_v2' },
  { value: 'Standard_NC12s_v3' },
  { value: 'Standard_NC24' },
  { value: 'Standard_NC24r' },
  { value: 'Standard_NC24rs_v2' },
  { value: 'Standard_NC24rs_v3' },
  { value: 'Standard_NC24s_v2' },
  { value: 'Standard_NC24s_v3' },
  { value: 'Standard_ND6s' },
  { value: 'Standard_ND12s' },
  { value: 'Standard_ND24rs' },
  { value: 'Standard_ND24s' },
  { value: 'Standard_NV6' },
  { value: 'Standard_NV12' },
  { value: 'Standard_NV24' },
];

export let storageTypes = [
  {
    name:  'Standard LRS',
    value: 'Standard_LRS',
  },
  {
    name:  'Standard ZRS',
    value: 'Standard_ZRS',
  },
  {
    name:  'Standard GRS',
    value: 'Standard_GRS',
  },
  {
    name:  'Standard RAGRS',
    value: 'Standard_RAGRS',
  },
  {
    name:  'Premium LRS',
    value: 'Premium_LRS',
  }
];

export let environments = [
  { value: 'AzurePublicCloud' },
  { value: 'AzureGermanCloud' },
  { value: 'AzureChinaCloud' },
  { value: 'AzureUSGovernmentCloud' }
];

export let aksRegions = [
  {
    'name':        'australiaeast',
    'displayName': 'Australia East',
  },
  {
    'name':        'australiasoutheast',
    'displayName': 'Australia Southeast',
  },
  {
    'name':        'brazilsouth',
    'displayName': 'Brazil South',
  },
  {
    'name':        'canadacentral',
    'displayName': 'Canada Central',
  },
  {
    'name':        'canadaeast',
    'displayName': 'Canada East',
  },
  {
    'name':        'centralindia',
    'displayName': 'Central India',
  },
  {
    'name':        'centralus',
    'displayName': 'Central US',
  },
  {
    'name':        'chinanorth2',
    'displayName': 'China North 2',
  },
  {
    'name':        'chinaeast2',
    'displayName': 'China East 2',
  },
  {
    'name':        'chinanorth3',
    'displayName': 'China North 3',
  },
  {
    'name':        'eastasia',
    'displayName': 'East Asia',
  },
  {
    'name':        'eastus',
    'displayName': 'East US',
  },
  {
    'name':        'eastus2',
    'displayName': 'East US 2',
  },
  {
    'name':        'francecentral',
    'displayName': 'France Central',
  },
  {
    'name':        'germanywestcentral',
    'displayName': 'Germany West Central',
  },
  {
    'name':        'japaneast',
    'displayName': 'Japan East',
  },
  {
    'name':        'japanwest',
    'displayName': 'Japan West',
  },
  {
    'name':        'koreacentral',
    'displayName': 'Korea Central',
  },
  {
    'name':        'koreasouth',
    'displayName': 'Korea South',
  },
  {
    'name':        'northcentralus',
    'displayName': 'North Central US',
  },
  {
    'name':        'northeurope',
    'displayName': 'North Europe',
  },
  {
    'name':        'southafricanorth',
    'displayName': 'South Africa North',
  },
  {
    'name':        'southcentralus',
    'displayName': 'South Central US',
  },
  {
    'name':        'southindia',
    'displayName': 'South India',
  },
  {
    'name':        'southeastasia',
    'displayName': 'Southeast Asia',
  },
  {
    'name':        'switzerlandnorth',
    'displayName': 'Switzerland North',
  },
  {
    'name':        'switzerlandwest',
    'displayName': 'Switzerland West',
  },
  {
    'name':        'uksouth',
    'displayName': 'UK South',
  },
  {
    'name':        'ukwest',
    'displayName': 'UK West',
  },
  {
    'name':        'westeurope',
    'displayName': 'West Europe',
  },
  {
    'name':        'westus',
    'displayName': 'West US',
  },
  {
    'name':        'westus2',
    'displayName': 'West US 2',
  },
  {
    'name':        'uaecentral',
    'displayName': 'UAE Central',
  },
  {
    'name':        'uaenorth',
    'displayName': 'UAE North',
  }
].sortBy('name');

export default {
  regions,
  storageTypes,
  environments,
  sizes,
  regionsWithAZs
}
