// create context for url

import React, { createContext } from 'react'

const UrlContext = createContext({
    baseUrl : `http://localhost:7000/api/users`
})

export default UrlContext