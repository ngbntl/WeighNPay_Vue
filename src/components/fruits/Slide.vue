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
                { image: 'https://img.freepik.com/photos-gratuite/collection-vibrante-fruits-legumes-sains-generes-par-ia_24640-80425.jpg?w=2000&t=st=1703859308~exp=1703859908~hmac=5e8dcceda39bdd1c8765dc9a7c6dca06fa0de7283b25ba8d3ac87c20ad1bddb9' },
                { image: 'https://img.freepik.com/photos-premium/fruits-frais-baies_841229-18854.jpg?w=2000' },
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
    height: 480px; 
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
  