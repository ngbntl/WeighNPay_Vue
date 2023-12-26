<template>
    <div class="carousel-container">
        <div class="carousel" :style="{ transform: `translateX(${-currentIndex * 100}%)` }">
            <div v-for="(item, index) in carouselItems" :key="index" class="carousel-item">
                <img :src="item.image" :alt="'Carousel Item ' + (index + 1)" class="w-full h-auto" />
            </div>
        </div>

        <button @click="prevSlide" class="prev-button">&lt;</button>
        <button @click="nextSlide" class="next-button">&gt;</button>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            carouselItems: [
                { image: 'https://img.freepik.com/photos-gratuite/collage-colore-texture-fruits-se-bouchent_23-2149870264.jpg?w=1800&t=st=1703476870~exp=1703477470~hmac=96af961a589b6016312227cef66b846dcab205f8187287ae0adaca0240f51ed3' },
                { image: 'https://res.cloudinary.com/dtndtcpyc/image/upload/v1703473581/opmwgdeducodqqeb35o7.jpg' },
                { image: 'https://res.cloudinary.com/dtndtcpyc/image/upload/v1703473580/phchfajf0jxspdu4no35.jpg' },
                // Replace with your own image URLs
                // { image: 'your_image_url_here.jpg' },
                // { image: 'your_image_url_here.jpg' },
                // { image: 'your_image_url_here.jpg' },
            ],
            currentIndex: 0,
        };
    },
    methods: {
        nextSlide() {
            if (this.currentIndex < this.carouselItems.length - 1) {
                this.currentIndex++;
            } else {
                this.currentIndex = 0;
            }
        },
        prevSlide() {
            if (this.currentIndex > 0) {
                this.currentIndex--;
            } else {
                this.currentIndex = this.carouselItems.length - 1;
            }
        },
    },
};
</script>
  
<style scoped>
  .carousel-container {
    position: relative;
    width: 80%;
    left: 10%;
    height: 480px; /* Change the value to adjust the size of the carousel */
    overflow: hidden;
  }
  
  .carousel {
    display: flex;
    transition: transform 0.5s ease;
  }
  
  .carousel-item {
    flex: 0 0 100%;
  }
  
  .prev-button,
  .next-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: #333;
    color: #fff;
    border: none;
    padding: 10px;
    cursor: pointer;
  }
  
  .prev-button {
    left: 10px;
  }
  
  .next-button {
    right: 10px;
  }
  </style>
  