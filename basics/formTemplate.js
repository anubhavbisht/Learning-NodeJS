const formTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Form</title>
</head>
<body>
    <h1>Contact Us</h1>

    <form action="/submit" method="POST">
        <!-- Text Input -->
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>

        <!-- Email Input -->
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>

        <!-- Textarea for Message -->
        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <!-- Radio Buttons -->
        <p>Gender:</p>
        <input type="radio" id="male" name="gender" value="male">
        <label for="male">Male</label><br>
        <input type="radio" id="female" name="gender" value="female">
        <label for="female">Female</label><br>
        <input type="radio" id="other" name="gender" value="other">
        <label for="other">Other</label><br>

        <!-- Checkbox -->
        <input type="checkbox" id="subscribe" name="subscribe" value="yes">
        <label for="subscribe">Subscribe to our newsletter</label><br>

        <!-- Submit Button -->
        <button type="submit">Submit</button>
    </form>
</body>
</html>

`
module.exports = formTemplate