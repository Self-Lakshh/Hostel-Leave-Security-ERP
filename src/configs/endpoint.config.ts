export const apiPrefix = '/api'

const endpointConfig = {
    signIn: '/security/login',
    signOut: '/sign-out',
    signUp: '/sign-up',
    forgotPassword: '/forgot-password',
    resetPassword: '/reset-password',
    getAllPendingRequests: '/security/allRequests/pending',
    getAllInRequests: '/security/allRequests/in',
    getAllOutRequests: '/security/allRequests/out',
    updateRequestStatus: '/request/update-status',
}

export default endpointConfig
