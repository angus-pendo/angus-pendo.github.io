// (function(apiKey){
//     (function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=o._q||[];
//     v=['initialize','identify','updateOptions','pageLoad','track'];for(w=0,x=v.length;w<x;++w)(function(m){
//         o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);
//         y=e.createElement(n);y.async=!0;y.src='https://cdn.pendo.io/agent/static/'+apiKey+'/pendo.js';
//         z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo');

//         // Call this whenever information about your visitors becomes available
//         // Please use Strings, Numbers, or Bools for value types.
//         pendo.initialize({

//             visitor: {
//                 id:              'static-visitor-id'  // Static visitor ID
//                 // full_name:    // Recommended if using Pendo Feedback
//                 // role:         // Optional

//                 // You can add any additional visitor level key-values here,
//                 // as long as it's not one of the above reserved names.
//             },

//             account: {
//                 id:              'static-account-id'  // Static account ID
//                 // name:         // Optional
//                 // is_paying:    // Recommended if using Pendo Feedback
//                 // monthly_value:// Recommended if using Pendo Feedback
//                 // planLevel:    // Optional
//                 // planPrice:    // Optional
//                 // creationDate: // Optional

//                 // You can add any additional account level key-values here,
//                 // as long as it's not one of the above reserved names.
//             }
//         });
// })('d084d4af-be6f-4e04-777d-be383c5ee49f');

(function(apiKey){
    function getRandomId() {
        return 'visitor_' + Math.random().toString(36).substring(2, 15);
    }

    function getRandomRole() {
        const roles = ['admin', 'editor', 'viewer', 'student', 'guest'];
        return roles[Math.floor(Math.random() * roles.length)];
    }

    function getRandomPermissions() {
        const allPermissions = ['read', 'write', 'delete', 'share', 'download'];
        const count = Math.floor(Math.random() * allPermissions.length) + 1;
        return Array.from({ length: count }, () => allPermissions[Math.floor(Math.random() * allPermissions.length)]);
    }

    function getRandomFeatures() {
        const features = ['beta-access', 'dark-mode', 'new-dashboard', 'ai-tools', 'reporting'];
        const count = Math.floor(Math.random() * features.length) + 1;
        return Array.from({ length: count }, () => features[Math.floor(Math.random() * features.length)]);
    }

    (function(p,e,n,d,o){
        var v,w,x,y,z;o=p[d]=p[d]||{};o._q=o._q||[];
        v=['initialize','identify','updateOptions','pageLoad','track'];
        for(w=0,x=v.length;w<x;++w)(function(m){
            o[m]=o[m]||function(){
                o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));
            };
        })(v[w]);

        y=e.createElement(n);y.async=!0;y.src='https://cdn.pendo.io/agent/static/'+apiKey+'/pendo.js';
        z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);
    })(window,document,'script','pendo');

    const visitorId = getRandomId();
    const accountId = 'account_' + Math.random().toString(36).substring(2, 10);

    pendo.initialize({
        visitor: {
            id: visitorId,
            role: getRandomRole(),
            student: Math.random() < 0.5,
            permissions: getRandomPermissions()
        },
        account: {
            id: accountId,
            university: Math.random() < 0.5,
            featureFlagsOn: getRandomFeatures()
        }
    });

})('10d9c187-a80c-4802-6f39-db3af17721f9');
