import { lazy } from 'react'
import authRoute from './authRoute'
import type { Routes } from '@/@types/routes'

export const publicRoutes: Routes = [...authRoute]

export const protectedRoutes: Routes = [
    {
        key: 'OutRequest',
        path: '/out-request',
        component: lazy(() => import('@/views/security/OutRequest')),
        authority: [],
    },
    {
        key: 'InRequest',
        path: '/in-request',
        component: lazy(() => import('@/views/security/InRequest')),
        authority: [],
    },
    {
        key: 'LeaveRecords',
        path: '/leave-records',
        component: lazy(() => import('@/views/security/LeaveRecords')),
        authority: [],
    },
]
