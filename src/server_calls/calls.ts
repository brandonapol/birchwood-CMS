export const calls = {
    get: async () => {
        const response = await fetch(`http://localhost:8000/api/blog`,
        {
            method: 'GET'
        });
        
        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        
        return await response.json()
    },

    post: async(data: any = {}) => {
        const response = await fetch('http://localhost:8000/api/blog',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error('Could not post data')
        }

        return await response.json()
    },

    // update: 
}