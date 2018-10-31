'use strict';
module.exports = {
    
    '/mongo/test': {
        get: {
            method: 'getMongo',
            public: false
            
        },
        put: {
            method: 'putMongo',
            public: false
            
        }
        
    }
};