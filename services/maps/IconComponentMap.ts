import { IconType } from '~/models/enums/IconType';

export const ICON_COMPONENT_MAP: {[k in IconType]: string} = {
  [IconType.EYE_ICON]: 'EyeIcon',
  [IconType.INFO_ICON]: 'InfoIcon',
  [IconType.CROSS_ICON]: 'CrossIcon',
  [IconType.LOCK_ICON]: 'LockIcon',
  [IconType.SEARCH_ICON]: 'SearchIcon',
};
