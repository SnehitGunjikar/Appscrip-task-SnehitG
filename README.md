# LOGO - StyleHub Marketplace
![App](https://img.shields.io/badge/AppScrip-Blue)
![Version](https://img.shields.io/badge/version-0.1.0-green)
![React](https://img.shields.io/badge/React-19.0.0-61DAFB)
![Next.js](https://img.shields.io/badge/Next.js-15.3.4-black?logo=next.js)
![License](https://img.shields.io/badge/license-MIT-yellow)

LOGO - StyleHub Marketplace is a modern e-commerce web application built with Next.js, showcasing a collection of fashion, jewelry, and electronic products. The application features a responsive design, product filtering, and a clean user interface.

## App Link
Check out the App here: https://appscrip-task-snehit-g.vercel.app/

## Features

- **Product Catalog**: Browse through a collection of products with images and details
- **Category Navigation**: Navigate between different product categories
- **Product Filtering**: Filter products by various categories and attributes
- **Modern UI**: Clean and modern user interface with smooth interactions
- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop devices

## Technologies Used

- **Next.js 15.3.4**: React framework for server-side rendering and static site generation
- **React 19.0.0**: JavaScript library for building user interfaces
- **CSS Modules**: For component-scoped styling
- **Satoshi Font**: Custom font for typography

## Project Structure

```
├── public/
│   ├── fonts/         # Custom Satoshi font files
│   ├── icons/         # SVG icons used throughout the application
│   └── images/        # Static images
├── src/
│   ├── app/
│   │   ├── components/  # React components
│   │   ├── context/     # React context for state management
│   │   ├── layout.js    # Root layout component
│   │   └── page.js      # Home page component
│   └── styles/
│       └── globals.css  # Global styles
├── .gitignore
├── eslint.config.mjs    # ESLint configuration
├── jsconfig.json        # JavaScript configuration
├── next.config.mjs      # Next.js configuration
├── package.json         # Project dependencies
└── README.md            # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm, yarn, or pnpm

### Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd AppScrip-task
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application

## Building for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

After building, you can start the production server:

```bash
npm start
# or
yarn start
# or
pnpm start
```
##  API Used

All the products are being fetched from [https://fakestoreapi.com/](https://fakestoreapi.com/).

## Component Structure

- **NavigationBar**: Main navigation with logo, search, and user actions
- **CategoryMenu**: Navigation for product categories
- **BannerSection**: Hero section with main heading
- **CatalogHeader**: Header for the product catalog with sorting and filtering options
- **ItemGrid**: Grid display of product items
- **ItemCard**: Individual product card with image and details
- **FooterSection**: Footer with links, newsletter signup, and social media

## State Management

The application uses React Context API for state management, particularly for managing the product catalog, filtering, and sorting functionality.

## License

This project is licensed under the MIT License.
