import { lazy } from 'react'
import authRoute from './authRoute'
import type { Routes } from '@/@types/routes'

export const publicRoutes: Routes = [...authRoute]

export const protectedRoutes: Routes = [
    {
        key: 'OutRequest',
        path: '/security/out-request',
        component: lazy(() => import('@/views/security/OutRequest')),
        authority: [],
    },
    {
        key: 'InRequest',
        path: '/security/in-request',
        component: lazy(() => import('@/views/security/InRequest')),
        authority: [],
    },
    {
        key: 'LeaveRecords',
        path: '/security/leave-records',
        component: lazy(() => import('@/views/security/LeaveRecords')),
        authority: [],
    },
]
