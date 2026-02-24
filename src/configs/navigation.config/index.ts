import {
    NAV_ITEM_TYPE_TITLE,
    NAV_ITEM_TYPE_ITEM,
    NAV_ITEM_TYPE_COLLAPSE,
} from '@/constants/navigation.constant'

import type { NavigationTree } from '@/@types/navigation'

const navigationConfig: NavigationTree[] = [
    {
        key: 'OutRequest',
        path: '/security/out-request',
        title: 'Out Request',
        translateKey: 'nav.outRequest',
        icon: 'outRequest',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'InRequest',
        path: '/security/in-request',
        title: 'In Request',
        translateKey: 'nav.inRequest',
        icon: 'inRequest',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'LeaveRecords',
        path: '/security/leave-records',
        title: 'Leave Records',
        translateKey: 'nav.leaveRecords',
        icon: 'leaveRecords',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    }
]

export default navigationConfig
