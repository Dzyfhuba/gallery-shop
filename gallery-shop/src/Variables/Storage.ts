import { SecureStoragePlugin } from "capacitor-secure-storage-plugin"

const token = {
    get: async () => {
        const token = await SecureStoragePlugin.get({ key: 'token' })

        return `Bearer ${token.value}`
    }
}

export {
    token
}