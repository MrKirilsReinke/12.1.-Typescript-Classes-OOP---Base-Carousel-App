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
    this.setTimer();
    this.setSlideShow();
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

  setTimer() {
    const timer = document.createElement('div');
    timer.classList.add('js-timer');
    timer.classList.add('carousel__timer');

    timer.innerHTML = `
    <svg class="js-timer carousel__timer" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#FFFFFF" height="50px" width="50px" version="1.1" id="Layer_1" viewBox="0 0 512 512" xml:space="preserve">
      <g>
        <g>
          <g>
            <path d="M276.193,58.507V40.389h14.578c11.153,0,20.194-9.042,20.194-20.194S301.923,0,290.771,0h-69.544     c-11.153,0-20.194,9.042-20.194,20.194s9.042,20.194,20.194,20.194h14.578v18.118C119.952,68.76,28.799,166.327,28.799,284.799     C28.799,410.078,130.721,512,256,512s227.201-101.922,227.201-227.201C483.2,166.327,392.046,68.76,276.193,58.507z      M276.193,470.516v-20.124c0-11.153-9.042-20.194-20.194-20.194c-11.153,0-20.194,9.042-20.194,20.194v20.124     c-86.91-9.385-156.137-78.614-165.522-165.522h20.124c11.153,0,20.194-9.042,20.194-20.194s-9.042-20.194-20.194-20.194H70.282     c9.385-86.91,78.614-156.137,165.522-165.523v20.124c0,11.153,9.042,20.194,20.194,20.194c11.153,0,20.194-9.042,20.194-20.194     V99.081c86.91,9.385,156.137,78.614,165.522,165.523h-20.124c-11.153,0-20.194,9.042-20.194,20.194s9.042,20.194,20.194,20.194     h20.126C432.331,391.903,363.103,461.132,276.193,470.516z"/>
            <path d="M317.248,194.99l-58.179,58.18c-1.011-0.097-2.034-0.151-3.071-0.151c-17.552,0-31.779,14.229-31.779,31.779     c0,17.552,14.228,31.779,31.779,31.779s31.779-14.229,31.779-31.779c0-1.037-0.054-2.06-0.151-3.07l58.178-58.18     c7.887-7.885,7.887-20.672,0-28.559C337.922,187.103,325.135,187.103,317.248,194.99z"/>
          </g>
        </g>
      </g>
    </svg>
    `;

    this.currentCarouselContainer.appendChild(timer);
  }

  setSlideShow() {
    const svg = this.getUniqueWrapper().querySelector<HTMLElement>('.js-timer');

    svg.addEventListener('click', () => this.startSlideShow());
  }

  startSlideShow() {
    const intervalId = setInterval(() => {
      this.setNextImage();
      if (this.activeIndex === this.images.length - 1) {
        clearInterval(intervalId);
      }
    }, 1000);
  }

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
