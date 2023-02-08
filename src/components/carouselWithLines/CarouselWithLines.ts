import BaseCarousel from '../baseCarousel/BaseCarousel';

class CarouselWithLines extends BaseCarousel {
  currentCarouselContainer: HTMLElement;
  activeLines: HTMLElement[];

  constructor(selector: string) {
    super(selector);
    this.currentCarouselContainer = this.getUniqueWrapper().firstElementChild as HTMLElement;
    this.activeLines = [];

    this.carouselWithLinesInitEvents();
  }

  carouselWithLinesInitEvents() {
    this.generateLines();
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
      });
      createLineWrapper.appendChild(line);
    });
    this.currentCarouselContainer.appendChild(createLineWrapper);
    this.setActiveLine();
  }

  setActiveLine() {
    if (this.activeLines.length === 1) {
      this.activeLines[0].classList.remove('active');
      this.activeLines[0].querySelector('hr').style.backgroundColor = '';
      this.activeLines.pop();
      this.setActiveLine();
    } else {
      const activeLine = this.currentCarouselContainer.querySelectorAll<HTMLElement>('.js-line')[this.activeIndex];
      activeLine.classList.add('active');
      activeLine.querySelector('hr').style.backgroundColor = 'white';
      this.activeLines.push(activeLine);
    }
  }

  setPrevImage() {
    super.setPrevImage();
    this.setActiveLine();
  }

  setNextImage() {
    super.setNextImage();
    this.setActiveLine();
  }
}

export default CarouselWithLines;
