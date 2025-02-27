(function(apiKey){
    (function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=o._q||[];
    v=['initialize','identify','updateOptions','pageLoad','track'];for(w=0,x=v.length;w<x;++w)(function(m){
        o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);
        y=e.createElement(n);y.async=!0;y.src='https://cdn.pendo.io/agent/static/'+apiKey+'/pendo.js';
        z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo');

        // Call this whenever information about your visitors becomes available
        // Please use Strings, Numbers, or Bools for value types.
        pendo.initialize({
            visitor: {
                id:              'static-visitor-id',  // Static visitor ID
                first_name:      'John',              // Static first name
                email:           'john.doe@example.com', // Static email
                permissions:     ['student','teacher','course creator'] //example roles
                // full_name:    // Recommended if using Pendo Feedback
                // role:         // Optional

                // You can add any additional visitor level key-values here,
                // as long as it's not one of the above reserved names.
            },

            account: {
                id:              'static-account-id',  // Static account ID
                name:            'Static Account Name' // Static account name
                // name:         // Optional
                // is_paying:    // Recommended if using Pendo Feedback
                // monthly_value:// Recommended if using Pendo Feedback
                // planLevel:    // Optional
                // planPrice:    // Optional
                // creationDate: // Optional

                // You can add any additional account level key-values here,
                // as long as it's not one of the above reserved names.
            }
        });
})('d084d4af-be6f-4e04-777d-be383c5ee49f');

//second pendo key
(function(apiKey){
    (function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=o._q||[];
    v=['initialize','identify','updateOptions','pageLoad','track'];for(w=0,x=v.length;w<x;++w)(function(m){
        o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);
        y=e.createElement(n);y.async=!0;y.src='https://cdn.pendo.io/agent/static/'+apiKey+'/pendo.js';
        z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo');

        // This function creates visitors and accounts in Pendo
        // You will need to replace <visitor-id-goes-here> and <account-id-goes-here> with values you use in your app
        // Please use Strings, Numbers, or Bools for value types.
        pendo.initialize({
            visitor: {
                id:              <visitor-id-goes-here> // Required if user is logged in
                // email:        // Recommended if using Pendo Feedback, or NPS Email
                // full_name:    // Recommended if using Pendo Feedback
                // role:         // Optional

                // You can add any additional visitor level key-values here,
                // as long as it's not one of the above reserved names.
            },

            account: {
                id:              <account-id-goes-here> // Highly recommended, required if using Pendo Feedback
                // name:         // Optional
                // is_paying:    // Recommended if using Pendo Feedback
                // monthly_value:// Recommended if using Pendo Feedback
                // planLevel:    // Optional
                // planPrice:    // Optional
                // creationDate: // Optional

                // You can add any additional account level key-values here,
                // as long as it's not one of the above reserved names.
            }
        });
})('86219bd1-c634-4306-7547-6440086b42f2');

