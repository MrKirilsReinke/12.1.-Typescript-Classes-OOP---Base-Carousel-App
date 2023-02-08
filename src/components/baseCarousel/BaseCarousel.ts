import carouselImages from '../../constants/images';

class BaseCarousel {
  rootElement: HTMLDivElement;
  images: string[];
  activeIndex: number;
  uniqueIdentifier: string;

  constructor(selector: string) {
    this.rootElement = document.querySelector(selector);
    this.images = carouselImages;
    this.activeIndex = 0;
    this.uniqueIdentifier = this.generateUniqueIdentifier();

    this.initEvents();
  }

  initEvents() {
    this.setImageCarouselHTML();
    this.setPrevNextFunctionality();
  }

  setImageCarouselHTML() {
    this.rootElement.appendChild(this.generateImageCarouselHTML());
  }

  generateImageCarouselHTML() {
    const wrapperElement = document.createElement('div');
    wrapperElement.classList.add(this.uniqueIdentifier);

    wrapperElement.innerHTML = `
    <div class="carousel__container">
      <button class="js-prev"><</button>
      <img src="${this.images[this.activeIndex]}" alt="CarouselImages" class="js-mainimage carousel__mainimage">
      <button class="js-next">></button>
      </div>
    `;

    return wrapperElement;
  }

  getUniqueWrapper() {
    return this.rootElement.querySelector(`.${this.uniqueIdentifier}`);
  }

  setPrevNextFunctionality() {
    const uniqueWrapper = this.getUniqueWrapper();

    const prevButton = uniqueWrapper.querySelector('.js-prev');
    const nextButton = uniqueWrapper.querySelector('.js-next');

    prevButton.addEventListener('click', () => this.setPrevImage());
    nextButton.addEventListener('click', () => this.setNextImage());
  }

  setPrevImage() {
    if (this.activeIndex === 0) {
      this.activeIndex = this.images.length - 1;
    } else {
      this.activeIndex -= 1;
    }
    this.setImageSource();
  }

  setNextImage() {
    if (this.activeIndex < this.images.length - 1) {
      this.activeIndex += 1;
    } else {
      this.activeIndex = 0;
    }
    this.setImageSource();
  }

  setImageSource() {
    const mainImage = this.getUniqueWrapper().querySelector<HTMLImageElement>('.carousel__mainimage');
    mainImage.src = this.images[this.activeIndex];
  }

  generateUniqueIdentifier() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < 5) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return `js-${result}`;
  }
}

export default BaseCarousel;
