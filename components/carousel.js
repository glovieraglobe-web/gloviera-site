class GlovieraCarousel extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }
        .carousel {
          position: relative;
          width: 100%;
          height: 300px;
          overflow: hidden;
          border-radius: 12px;
        }
        .slides {
          display: flex;
          width: 100%;
          height: 100%;
          transition: transform 0.5s ease-in-out;
        }
        .slide {
          min-width: 100%;
          height: 100%;
          position: relative;
        }
        .slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .slide-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 2rem;
          background: linear-gradient(to top, rgba(48, 12, 12, 0.8) 0%, transparent 100%);
          color: white;
        }
        .slide-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        .slide-desc {
          font-size: 0.9rem;
          opacity: 0.9;
        }
        .controls {
          position: absolute;
          top: 50%;
          width: 100%;
          display: flex;
          justify-content: space-between;
          transform: translateY(-50%);
          padding: 0 1rem;
          z-index: 10;
        }
        .control-btn {
          background: rgba(255, 255, 255, 0.3);
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          backdrop-filter: blur(5px);
          transition: all 0.3s ease;
        }
        .control-btn:hover {
          background: rgba(255, 255, 255, 0.5);
        }
        .indicators {
          position: absolute;
          bottom: 1rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 0.5rem;
          z-index: 10;
        }
        .indicator {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .indicator.active {
          background: white;
          transform: scale(1.2);
        }
        @media (max-width: 768px) {
          .carousel {
            height: 200px;
          }
          .slide-content {
            padding: 1rem;
          }
          .slide-title {
            font-size: 1.2rem;
          }
        }
      </style>
      <div class="carousel">
        <div class="slides">
          <div class="slide">
            <img src="http://static.photos/beauty/1200x630/1" alt="Summer Special">
            <div class="slide-content">
              <h3 class="slide-title">Summer Glow Special</h3>
              <p class="slide-desc">20% off on all facials and skincare treatments</p>
            </div>
          </div>
          <div class="slide">
            <img src="http://static.photos/beauty/1200x630/2" alt="Hair Care">
            <div class="slide-content">
              <h3 class="slide-title">Hair Care Bonanza</h3>
              <p class="slide-desc">Get a free hair spa with any coloring service</p>
            </div>
          </div>
          <div class="slide">
            <img src="http://static.photos/beauty/1200x630/3" alt="New Arrivals">
            <div class="slide-content">
              <h3 class="slide-title">New Product