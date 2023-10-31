# Typescript-Classes-OOP---Base-Carousel-App

## Description

This TypeScript project provides a customizable and interactive carousel component for a web application. It is built using an object-oriented programming (OOP) approach, making it modular and extensible. The project consists of three main components: BaseCarousel, CarouselWithLines, and CarouselWithLinesAndImages, each building upon the previous one to add new features and functionality.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [How to Contribute](#how-to-contribute)

## Installation

To get started with this project, you need to install the required dependencies and run it. Follow these steps:

1. Clone the repository to your local machine.

```bash
git clone <repository_url>
```

2. Navigate to the project directory.

```bash
cd <project_directory>
```

3. Install the project dependencies using npm.

```bash
npm install
```

4. Run the development server to start the application.

```bash
npm start
```

## Usage

1. Import the necessary carousel components:

```typescript
import BaseCarousel from './components/baseCarousel/BaseCarousel';
import CarouselWithLines from './components/carouselWithLines/CarouselWithLines';
import CarouselWithLinesAndImages from './components/carouselWithLinesAndImages/CarouselWithLinesAndImages';
```

2. Initialize the carousels with a target element:

```typescript
const carousel = new BaseCarousel('.js-wrapper');
const carouselWithLines = new CarouselWithLines('.js-wrapper');
const carouselWithLinesAndImages = new CarouselWithLinesAndImages('.js-wrapper');
```

## Features

* Object-Oriented Programming (OOP): This project follows a robust OOP approach, making it modular, maintainable, and easy to extend. It's structured around classes and objects, which helps keep code organized and allows for the creation of additional components with ease.
* BaseCarousel: The foundation of the carousel component with basic image navigation and button controls.
* CarouselWithLines: Extends BaseCarousel by adding interactive lines that allow users to jump to specific slides with a click.
* CarouselWithLinesAndImages: Further extends CarouselWithLines by including secondary images and a timer for automated slideshow functionality.
* Customizable Styles: Easily modify the CSS styles in the `styles.scss` file to match your project's design.

## License

This project is open-source and is available under the [MIT License](LICENSE). You are free to use, modify, and distribute this project for any purpose.

## How to Contribute

Contributions to this project are welcome. To contribute, follow these steps:

1. Fork the repository to your GitHub account.
2. Create a new branch for your feature or bug fix.

```bash
git checkout -b feature/your-feature-name
```

3. Make your changes and commit them.

```bash
git add .
git commit -m "Added a new feature"
```

4. Push your changes to your forked repository.

```bash 
git push origin feature/your-feature-name
```

5. Create a Pull Request (PR) to the main repository, explaining your changes and improvements.