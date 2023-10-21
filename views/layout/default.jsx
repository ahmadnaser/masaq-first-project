import React from "react";
function DefaultLayout(props){
    return (
        <html>
                <head>
                    <title> {props.title}</title>
                
                    <meta charSet="utf-8" />
                    <meta httpEquiv="Content-type" content="text/html; charset=utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link href="https://use.fontawesome.com/releases/v5.0.7/css/all.css" rel="stylesheet" /> 
                     <link rel='stylesheet' href="../css/style.css" />
                     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" />


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
                </head>
                
                <body>
                {props.children}
                </body>
                </html>
                
            )
}

module.exports = DefaultLayout