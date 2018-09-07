import React, {Component} from 'react';
import {
  Alert,
  Modal,
  ModalBody,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselCaption
} from 'reactstrap';
import './style.sass';

/**
 * A gallery of photos
 * @name Gallery
 */
class Gallery extends Component {
  state = {
    showModal: false,
    activeIndex: 0,
    animating: false,
  };

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === this.props.photos.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.props.photos.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  render(){
    const {photos, loading, error} = this.props;
    const {showModal, activeIndex} = this.state
    return(
      <div className="gallery">
        {loading ?
          <Alert color="info">Loading...</Alert>
        : error ?
          <Alert color="warning">Connection error: Could not load the data...</Alert>
        :
          <div className="row">
            {photos.map((item, index) =>
              <div
                className="col-sm-4 col-md-3 gallery__item"
                key={index}
                onClick={() => this.setState({
                  showModal: true,
                  activeIndex: index,
                })}
              >
                <img
                  src={item.thumbnailUrl}
                  alt={item.title}
                  title={item.title}
                  className="gallery__thumbnail"
                />
                <div className="gallery__title">{item.title}</div>
              </div>
            )}
          </div>
        }
        <Modal
          isOpen={!!showModal}
          toggle={() => this.setState({showModal: !showModal})}
          size="lg"
        >
          <ModalBody>
            <Carousel
              activeIndex={activeIndex}
              next={this.next}
              previous={this.previous}
              className="carousel-interesting-animation"
            >
              {photos.map((item, index) => (
                <CarouselItem
                  onExiting={() => this.setState({animating: true})}
                  onExited={() => this.setState({animating: false})}
                  key={index}
                >
                  <img src={item.url} alt={item.title} className="gallery__fullimage" />
                  <CarouselCaption captionText={item.title} />
                </CarouselItem>
              ))}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={() => this.previous()} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={() => this.next()} />
            </Carousel>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default Gallery