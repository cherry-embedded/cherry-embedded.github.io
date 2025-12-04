<template>
  <div class="products-page">
    <!-- Page Header -->
    <section class="page-header">
      <div class="header-background">
        <div class="gradient-orb orb-1"></div>
        <div class="gradient-orb orb-2"></div>
        <div class="grid-pattern"></div>
      </div>
      <div class="container">
        <div class="header-content">
          <h1 class="page-title">Cherry 产品生态</h1>
          <p class="page-subtitle">为嵌入式开发者精心打造的高质量开源软件解决方案</p>
        </div>
      </div>
    </section>

    <!-- Products Grid -->
    <section class="products-section">
      <div class="container">
        <div class="products-grid">
          <div
            v-for="(product, index) in products"
            :key="product.id"
            class="product-card"
            :class="`card-gradient-${index % 4}`"
            @click="goToProduct(product.id)"
          >
            <div class="card-background">
              <div class="gradient-bg"></div>
              <div class="pattern-overlay"></div>
            </div>

            <div class="card-content">
              <div class="product-header">
                <div class="product-icon">
                  {{ product.icon || "📦" }}
                </div>
                <h3 class="product-name">{{ product.name }}</h3>
              </div>

              <p class="product-description">{{ product.description }}</p>

              <div class="product-tags">
                <span
                  v-for="tag in product.tags"
                  :key="tag"
                  class="tag"
                >
                  {{ tag }}
                </span>
              </div>

              <div class="card-actions">
                <div class="action-hint">
                  <span class="hint-text">点击查看详情</span>
                  <span class="hint-arrow">→</span>
                </div>
              </div>
            </div>

            <div class="hover-indicator">
              <div class="indicator-content">
                <div class="indicator-icon">🚀</div>
                <span class="indicator-text">探索 {{ product.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { products as productsData } from '../data/products'

const router = useRouter()

const products = computed(() => productsData)

const goToProduct = (productId: string) => {
  router.push(`/product/${productId}`)
}
</script>

<style scoped>
.products-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  position: relative;
  overflow: hidden;
}

.page-header {
  padding: 4rem 0;
  position: relative;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  overflow: hidden;
}

.header-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.3;
  animation: float 8s ease-in-out infinite;
}

.orb-1 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%);
  top: -200px;
  right: -200px;
  animation-delay: -2s;
}

.orb-2 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
  bottom: -150px;
  left: -150px;
  animation-delay: -6s;
}

.grid-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px);
  background-size: 60px 60px;
  animation: grid-move 25s linear infinite;
  opacity: 0.4;
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg) scale(1); }
  33% { transform: translateY(-30px) rotate(120deg) scale(1.1); }
  66% { transform: translateY(20px) rotate(240deg) scale(0.9); }
}

@keyframes grid-move {
  0% { transform: translate(0, 0); }
  100% { transform: translate(60px, 60px); }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
}

.header-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.page-title {
  font-size: 3.5rem;
  font-weight: 900;
  margin-bottom: 1.5rem;
  background: linear-gradient(45deg, #ffffff, #f8f9fa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.page-subtitle {
  font-size: 1.25rem;
  opacity: 0.9;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.products-section {
  padding: 6rem 0;
  position: relative;
  z-index: 2;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 3rem;
  margin-top: 2rem;
}

.product-card {
  position: relative;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 24px;
  padding: 2.5rem;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(20px);
  overflow: hidden;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.1),
    0 2px 8px rgba(0, 0, 0, 0.05);
}

.card-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 24px;
  overflow: hidden;
}

.gradient-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.1;
  transition: all 0.5s ease;
}

.card-gradient-0 .gradient-bg {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.card-gradient-1 .gradient-bg {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
}

.card-gradient-2 .gradient-bg {
  background: linear-gradient(135deg, #d299c2 0%, #fef9d3 100%);
}

.card-gradient-3 .gradient-bg {
  background: linear-gradient(135deg, #fad0c4 0%, #ffd1ff 100%);
}

.pattern-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image:
    radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 2px, transparent 2px),
    radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 2px, transparent 2px);
  background-size: 40px 40px;
  background-position: 0 0, 20px 20px;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.product-card:hover {
  transform: translateY(-12px) scale(1.02);
  box-shadow:
    0 25px 60px rgba(102, 126, 234, 0.15),
    0 10px 30px rgba(0, 0, 0, 0.1);
}

.product-card:hover .gradient-bg {
  opacity: 0.2;
}

.product-card:hover .pattern-overlay {
  opacity: 1;
}

.card-content {
  position: relative;
  z-index: 3;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.product-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.product-icon {
  font-size: 3rem;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
  animation: float 8s ease-in-out infinite;
}

.product-name {
  font-size: 2rem;
  font-weight: 800;
  color: #2d3748;
  background: linear-gradient(135deg, #2d3748 0%, #4a5568 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.product-description {
  color: #64748b;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  flex-grow: 1;
}

.product-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tag {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.15) 0%, rgba(118, 75, 162, 0.15) 100%);
  color: #667eea;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border: 1px solid rgba(102, 126, 234, 0.2);
  backdrop-filter: blur(10px);
}

.card-actions {
  margin-top: auto;
  padding-top: 1rem;
}

.action-hint {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  border-radius: 12px;
  color: #667eea;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 1px solid rgba(102, 126, 234, 0.2);
}

.product-card:hover .action-hint {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-color: transparent;
  transform: translateY(-2px);
}

.hint-text {
  font-size: 0.9rem;
}

.hint-arrow {
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.product-card:hover .hint-arrow {
  transform: translateX(5px);
}

.hover-indicator {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  opacity: 0;
  transform: translateY(-10px) scale(0.8);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 4;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

.product-card:hover .hover-indicator {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.indicator-content {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.indicator-icon {
  font-size: 1rem;
}

.indicator-text {
  font-size: 0.8rem;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2.5rem;
  }

  .products-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .product-card {
    padding: 2rem;
  }

  .product-name {
    font-size: 1.5rem;
  }

  .product-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}
</style>
