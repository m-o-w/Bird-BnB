# Bird BnB Website

A modern, responsive website for Bird BnB - a pet bird boarding and care service located in Delhi, India.

## Project Structure

```
/
├── index.html          # Main HTML file
├── config.js          # Configuration file with all configurable values
├── css/
│   └── styles.css     # Custom CSS styles
├── js/
│   ├── main.js        # Main JavaScript functionality
│   └── content.js     # Content population from config
└── README.md          # This file
```

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Built with Tailwind CSS and custom animations
- **Configurable**: All business information, contact details, and content are stored in `config.js`
- **Dynamic Content**: Content is populated from the configuration file via JavaScript
- **Smooth Animations**: Includes floating feathers, smooth scrolling, and hover effects

## Configuration

All configurable values are stored in `config.js`. You can easily update:

- **Business Information**: Name, tagline, location
- **Contact Details**: Phone number, WhatsApp number, message template
- **Statistics**: Birds cared for, happy owners, years of experience
- **Content**: Hero section, about section, services, gallery, liability terms
- **Animations**: Feather count and duration settings

### Example: Updating Contact Information

Edit `config.js`:

```javascript
contact: {
    phone: "9643394044",
    whatsapp: "919643394044",
    whatsappMessage: "Hi, I'm interested in boarding my bird."
}
```

### Example: Adding a New Service

Edit `config.js` in the `services.items` array:

```javascript
{
    icon: "ph-icon-name",
    iconBg: "purple",  // orange, green, blue, purple, etc.
    title: "Service Title",
    description: "Service description here."
}
```

### Example: Adding a Bird to Gallery

Edit `config.js` in the `gallery.birds` array:

```javascript
{
    name: "Bird Name",
    image: "https://example.com/bird-image.jpg"
}
```

## Setup

1. Clone or download this repository
2. Open `index.html` in a web browser
3. No build process required - it's a static website

## Dependencies

The website uses the following external resources (loaded via CDN):

- **Tailwind CSS**: For utility-first styling
- **Google Fonts**: Fredoka and Nunito fonts
- **Phosphor Icons**: Icon library

All dependencies are loaded from CDN, so no package installation is required.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Customization

### Colors

The website uses a green/emerald color scheme. To change colors, modify Tailwind classes in `index.html` or add custom CSS in `css/styles.css`.

### Fonts

Fonts are loaded from Google Fonts. To change fonts, update the Google Fonts link in `index.html` and modify the font-family in `css/styles.css`.

### Images

Hero and gallery images are currently using Unsplash URLs. Replace these with your own images by updating the URLs in `config.js`.

## License

This project is for Bird BnB business use.

## Contact

For questions or support, contact Bird BnB at the phone number listed in `config.js`.

