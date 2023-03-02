export const calls = {
    get: async() => {
        const response = await fetch('http://localhost:8000/api/blog',
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        
        if (!response.ok) {
            throw new Error('Could not fetch data')
        }

        return await response.json()
    },

    post: async() => {
        const respone = await fetch('')
    }
}