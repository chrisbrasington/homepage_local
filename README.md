# Simple Homepage

This is a simple homepage with categorized links.

![Sample Page](images/sample.png)

## Usage
Just open the HTML file in a web browser.

## Structure
- `index.html`: The main HTML file.
- `style.css`: Stylesheet for the homepage.
- `script.js`: JavaScript file to populate the menu dynamically.
- `favicon.ico`: Favicon for the webpage.

## Image
```
  <div class="image">
    <img alt="fem" src="images/01.jpg">
  </div>
```

## Categories
- Simple Categories to display

Each category contains links with corresponding icons.

## Why Configuration is Within HTML

The configuration data for the menu is embedded directly within the HTML using a script tag with type `application/json`. This approach eliminates the need for a web server to serve dynamic data, making it simpler to deploy and share the homepage without any server-side processing.

## Homepage
Like
> file:///home/chris/web/index.html

## Dependencies
- Font Awesome: Used for icons.
- External CSS and JavaScript libraries.
