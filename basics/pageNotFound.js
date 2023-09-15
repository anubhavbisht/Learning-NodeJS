const notFoundTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Not Found</title>
    <style>
        /* Some basic CSS for styling the 404 page */
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #f5f5f5;
        }
        .container {
            margin-top: 100px;
        }
        h1 {
            font-size: 36px;
            color: #333;
        }
        p {
            font-size: 18px;
            color: #777;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Page Not Found</h1>
        <p>The requested page could not be found on this server.</p>
        <p><a href="/">Go back to the homepage</a></p>
    </div>
</body>
</html>
`
module.exports = notFoundTemplate