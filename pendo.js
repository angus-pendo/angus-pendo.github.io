(function(apiKey, pendoInstance){
    (function(p,e,n,d,o){var v,w,x,y,z;
        p[pendoInstance] = p[pendoInstance] || {}; // Assign unique Pendo instance
        o = p[pendoInstance];
        o._q = o._q || [];
        v = ['initialize', 'identify', 'updateOptions', 'pageLoad', 'track'];
        for (w = 0, x = v.length; w < x; ++w) (function(m) {
            o[m] = o[m] || function() { o._q[m === v[0] ? 'unshift' : 'push']([m].concat([].slice.call(arguments, 0))); };
        })(v[w]);

        y = e.createElement(n);
        y.async = !0;
        y.src = 'https://cdn.pendo.io/agent/static/' + apiKey + '/pendo.js';
        z = e.getElementsByTagName(n)[0];
        z.parentNode.insertBefore(y, z);
    })(window, document, 'script', pendoInstance);

    // Ensure Pendo instance is initialized properly
    setTimeout(function() {
        if (window[pendoInstance] && typeof window[pendoInstance].initialize === 'function') {
            window[pendoInstance].initialize({
                visitor: {
                    id: 'static-visitor-id',  
                    first_name: 'John',              
                    email: 'john.doe@example.com', 
                    permissions: ['student', 'teacher', 'course creator']
                },
                account: {
                    id: 'static-account-id',  
                    name: 'Static Account Name'
                }
            });
        } else {
            console.error('Pendo failed to load for API key:', apiKey);
        }
    }, 5000); // Delayed initialization to ensure the script is loaded

})('d084d4af-be6f-4e04-777d-be383c5ee49f', 'pendo1');

(function(apiKey, pendoInstance){
    (function(p,e,n,d,o){var v,w,x,y,z;
        p[pendoInstance] = p[pendoInstance] || {}; // Assign unique Pendo instance
        o = p[pendoInstance];
        o._q = o._q || [];
        v = ['initialize', 'identify', 'updateOptions', 'pageLoad', 'track'];
        for (w = 0, x = v.length; w < x; ++w) (function(m) {
            o[m] = o[m] || function() { o._q[m === v[0] ? 'unshift' : 'push']([m].concat([].slice.call(arguments, 0))); };
        })(v[w]);

        y = e.createElement(n);
        y.async = !0;
        y.src = 'https://cdn.pendo.io/agent/static/' + apiKey + '/pendo.js';
        z = e.getElementsByTagName(n)[0];
        z.parentNode.insertBefore(y, z);
    })(window, document, 'script', pendoInstance);

    // Ensure Pendo instance is initialized properly
    setTimeout(function() {
        if (window[pendoInstance] && typeof window[pendoInstance].initialize === 'function') {
            window[pendoInstance].initialize({
                visitor: {
                    id: 'static-visitor-id-2',  
                    first_name: 'Jane',              
                    email: 'jane.doe@example.com', 
                    permissions: ['admin', 'editor']
                },
                account: {
                    id: 'static-account-id-2',  
                    name: 'Static Account Name 2'
                }
            });
        } else {
            console.error('Pendo failed to load for API key:', apiKey);
        }
    }, 5000); // Delayed initialization to ensure the script is loaded

})('86219bd1-c634-4306-7547-6440086b42f2', 'pendo2');
