export const routes = {
    auth: {
        login: '/login' as const,
        register: '/register' as const,
    },
    conversation: {
        index: '/conversations' as const,
        single: (id: string) => `/conversations?id=${id}` as const,
    }
}