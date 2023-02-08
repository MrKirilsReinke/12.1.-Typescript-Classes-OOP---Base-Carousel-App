import CarouselWithLines from '../carouselWithLines/CarouselWithLines';

class CarouselWithLinesAndImages extends CarouselWithLines {
  activeImages: HTMLElement[];

  constructor(selector:string) {
    super(selector);

    this.activeImages = [];

    this.initSecondaryImagesEvents();
  }

  initSecondaryImagesEvents() {
    this.generateSecondaryImages();
    // this.setSlideShow();
  }

  generateSecondaryImages() {
    const createImagesWrapper = document.createElement('div');
    createImagesWrapper.classList.add('js-secondaryimages');
    createImagesWrapper.classList.add('carousel__secondaryimages');

    this.images.forEach((_: string, index: number) => {
      const imageElement = document.createElement('img');
      imageElement.src = this.images[this.activeIndex];
      imageElement.alt = 'CarouselImage';
      imageElement.classList.add('js-secondaryimage');
      imageElement.classList.add('carousel__secondaryimage');

      imageElement.addEventListener('click', () => {
        this.activeIndex = index;
        this.setImageSource();
        this.setActiveLine();
        this.setActiveSecondaryImage();
      });

      this.activeIndex += 1;
      createImagesWrapper.appendChild(imageElement);
    });
    const element = document.querySelector(`.${this.uniqueIdentifier}`);
    element.after(createImagesWrapper);
    this.setActiveSecondaryImage();
  }

  setActiveSecondaryImage() {
    if (this.activeImages.length === 1) {
      this.activeImages[0].classList.remove('active');
      this.activeImages[0].style.transform = '';
      this.activeImages.pop();
      this.setActiveSecondaryImage();
    } else {
      if (this.activeIndex > this.images.length - 1) {
        this.activeIndex = 0;
      }
      const activeImage = document.querySelectorAll<HTMLElement>('.js-secondaryimage')[this.activeIndex];
      activeImage.classList.add('active');
      activeImage.style.transform = 'scale(1.1)';
      this.activeImages.push(activeImage);
    }
  }

  // setSlideShow() {
  //   const mainImage = this.getUniqueWrapper().querySelector<HTMLElement>('.js-mainimage');
  //   console.log(mainImage);

  //   mainImage.addEventListener('click', () => this.startSlideShow());
  // }

  // startSlideShow() {
  //   const intervalId = setInterval(() => {
  //     this.setNextImage();
  //     if (this.activeIndex === this.images.length - 1) {
  //       clearInterval(intervalId);
  //     }
  //   }, 1000);
  // }

  generateLines() {
    const createLineWrapper = document.createElement('div');
    createLineWrapper.classList.add('js-lines');
    createLineWrapper.classList.add('carousel__lines');

    this.images.forEach((_: string, index: number) => {
      const line = document.createElement('span');
      line.classList.add('js-line');
      line.classList.add('carosuel__line');
      const hr = document.createElement('hr');
      line.appendChild(hr);

      line.addEventListener('click', () => {
        this.activeIndex = index;
        this.setImageSource();
        this.setActiveLine();
        this.setActiveSecondaryImage();
      });
      createLineWrapper.appendChild(line);
    });
    this.currentCarouselContainer.appendChild(createLineWrapper);
    this.setActiveLine();
  }

  // How to avoid this rewriting above?

  setPrevImage() {
    super.setPrevImage();
    this.setActiveSecondaryImage();
  }

  setNextImage() {
    super.setNextImage();
    this.setActiveSecondaryImage();
  }
}

export default CarouselWithLinesAndImages;
