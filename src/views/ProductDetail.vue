<template>
  <div class="product-detail" v-if="product">
    <!-- Product Header -->
    <section class="product-header">
      <div class="header-background">
        <div class="gradient-overlay"></div>
        <div class="pattern-overlay"></div>
      </div>
      <div class="container">
        <div class="header-content">
          <div class="product-icon">{{ product.icon || '🍒' }}</div>
          <h1 class="product-title">{{ product.name }}</h1>
          <p class="product-subtitle">{{ product.shortDescription }}</p>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="main-content">
      <div class="container">
        <div class="content-layout">
          <!-- Left Sidebar -->
          <aside class="sidebar">
            <div class="sidebar-content">
              <!-- Quick Links -->
              <div class="quick-links">
                <h3>快速链接</h3>
                <div class="link-group">
                  <a :href="product.github" target="_blank" class="quick-link github">
                    <div class="link-icon">🐙</div>
                    <div class="link-content">
                      <span class="link-title">官方链接</span>
                      <span class="link-desc">github/官网</span>
                    </div>
                  </a>
                  <a v-if="product.documentation" :href="product.documentation" target="_blank" class="quick-link docs">
                    <div class="link-icon">📚</div>
                    <div class="link-content">
                      <span class="link-title">文档</span>
                      <span class="link-desc">使用指南</span>
                    </div>
                  </a>
                </div>
              </div>

              <!-- Product Info -->
              <div class="product-info">
                <h3>产品信息</h3>
                <div class="info-item">
                  <span class="info-label">当前版本</span>
                  <span class="info-value">{{ product.currentVersion || 'v1.0.0' }}</span>
                </div>
                <div class="info-item">
                  <span class="info-label">授权协议</span>
                  <span class="info-value">Apache 2.0</span>
                </div>
              </div>
            </div>
          </aside>

          <!-- Main Content Area -->
          <main class="content-main">
            <!-- Product Description -->
            <div class="content-section">
              <h2>产品介绍</h2>
              <div class="description-content">
                <p>{{ product.description }}</p>
              </div>
            </div>

            <!-- Product Image/Architecture -->
            <div class="content-section" v-if="product.image">
              <div class="image-container">
                <div class="image-wrapper">
                  <img
                    :src="product.image"
                    :alt="`${product.name} 架构图`"
                    class="product-image"
                    @error="onImageError"
                  />
                  <div class="image-overlay">
                    <div class="zoom-hint">🔍 点击查看大图</div>
                  </div>
                </div>
                <p class="image-caption">{{ getImageCaption(product.id) }}</p>
              </div>
            </div>

            <!-- Features -->
            <div class="content-section" v-if="product.features">
              <h2>核心特性</h2>
              <div class="features-grid">
                <div
                  v-for="(feature, index) in product.features"
                  :key="index"
                  class="feature-card"
                >
                  <div class="feature-icon">{{ getFeatureIcon(index) }}</div>
                  <span class="feature-text">{{ feature }}</span>
                </div>
              </div>
            </div>

            <!-- Pricing -->
            <div class="content-section" v-if="product.pricing">
              <h2>商业授权</h2>
              <p class="pricing-description">{{ product.pricing.description }}</p>
              <div class="pricing-grid">
                <div
                  v-for="item in product.pricing.items"
                  :key="item.id"
                  class="pricing-card"
                >
                  <div class="pricing-header">
                    <h3 class="pricing-title">{{ item.name }}</h3>
                    <div class="pricing-price">{{ item.price }}</div>
                  </div>
                  <div class="pricing-description">
                    <p>{{ item.description }}</p>
                  </div>
                  <div class="pricing-features">
                    <ul>
                      <li v-for="feature in item.features" :key="feature">
                        <span class="feature-check">✓</span>
                        {{ feature }}
                      </li>
                    </ul>
                  </div>
                  <div class="pricing-action">
                    <a
                      :href="item.url || 'mailto:contact@cherry-embedded.org'"
                      class="pricing-button"
                      target="_blank"
                    >
                      立即购买
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getProductById } from '../data/products'

const route = useRoute()

const getFeatureIcon = (index: number) => {
  const icons = ["🚀", "⚡", "🔧", "🛡️", "💎", "🎯", "🔥", "💪"]
  return icons[index % icons.length]
}

const getImageCaption = (_productId: string) => {
  return ''
}

const onImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  img.style.display = 'none'
  console.warn('Image failed to load:', img.src)
}

const product = computed(() => {
  const id = route.params.id as string
  return getProductById(id)
})
</script>

<style scoped>
.product-detail {
  min-height: 100vh;
  background: #f8fafc;
}

.product-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 4rem 0;
  position: relative;
  overflow: hidden;
}

.header-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 100%);
}

.pattern-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image:
    radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 2px, transparent 2px),
    radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 2px, transparent 2px);
  background-size: 50px 50px;
  background-position: 0 0, 25px 25px;
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

.product-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  display: inline-block;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
}

.product-title {
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #ffffff, #e2e8f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.product-subtitle {
  font-size: 1.25rem;
  opacity: 0.9;
  line-height: 1.6;
}

.main-content {
  padding: 4rem 0;
}

.content-layout {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 3rem;
  align-items: start;
}

.sidebar {
  position: sticky;
  top: 2rem;
}

.sidebar-content {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
}

.quick-links {
  padding: 2rem;
  border-bottom: 1px solid #e2e8f0;
}

.quick-links h3 {
  font-size: 1.1rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 1rem;
}

.link-group {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.quick-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  border-radius: 12px;
  text-decoration: none;
  color: #2d3748;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid #e2e8f0;
}

.quick-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.15);
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-color: transparent;
}

.link-icon {
  font-size: 1.5rem;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(102, 126, 234, 0.1);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.quick-link:hover .link-icon {
  background: rgba(255, 255, 255, 0.2);
}

.link-content {
  display: flex;
  flex-direction: column;
}

.link-title {
  font-weight: 600;
  font-size: 0.95rem;
}

.link-desc {
  font-size: 0.8rem;
  opacity: 0.7;
}

.product-info {
  padding: 2rem;
}

.product-info h3 {
  font-size: 1.1rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 1rem;
}

.info-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid #f1f5f9;
}

.info-item:last-child {
  border-bottom: none;
}

.info-label {
  font-size: 0.9rem;
  color: #64748b;
}

.info-value {
  font-size: 0.9rem;
  font-weight: 600;
  color: #2d3748;
}

.content-main {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
}

.content-section {
  padding: 2.5rem;
  border-bottom: 1px solid #f1f5f9;
}

.content-section:last-child {
  border-bottom: none;
}

.content-section h2 {
  font-size: 1.75rem;
  font-weight: 800;
  color: #2d3748;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #2d3748 0%, #4a5568 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.description-content p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #4a5568;
}

/* Image Styles */
.image-container {
  max-width: 100%;
}

.image-wrapper {
  position: relative;
  display: inline-block;
  max-width: 100%;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
}

.image-wrapper:hover {
  transform: scale(1.02);
  box-shadow: 0 12px 35px rgba(102, 126, 234, 0.15);
}

.product-image {
  max-width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease;
  border-radius: 16px;
}

.image-wrapper:hover .image-overlay {
  opacity: 1;
}

.zoom-hint {
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.2);
  padding: 0.75rem 1.5rem;
  border-radius: 20px;
  backdrop-filter: blur(10px);
}

.image-caption {
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #64748b;
  text-align: center;
  font-style: italic;
  line-height: 1.5;
}

.features-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

.feature-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.1);
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
}

.feature-icon {
  font-size: 1.25rem;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px;
  color: white;
}

.feature-text {
  font-size: 0.95rem;
  color: #2d3748;
  font-weight: 500;
}

.pricing-description {
  font-size: 1rem;
  color: #64748b;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.pricing-card {
  background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
  border-radius: 16px;
  padding: 2rem;
  border: 2px solid #e2e8f0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.pricing-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.pricing-card:hover {
  transform: translateY(-8px);
  border-color: #667eea;
  box-shadow: 0 20px 40px rgba(102, 126, 234, 0.15);
}

.pricing-card:hover::before {
  opacity: 1;
}

.pricing-header {
  position: relative;
  z-index: 2;
  margin-bottom: 1.5rem;
}

.pricing-title {
  font-size: 1.5rem;
  font-weight: 800;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.pricing-price {
  font-size: 2rem;
  font-weight: 900;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.pricing-description {
  position: relative;
  z-index: 2;
  margin-bottom: 1.5rem;
}

.pricing-description p {
  color: #64748b;
  line-height: 1.6;
}

.pricing-features {
  position: relative;
  z-index: 2;
  margin-bottom: 2rem;
}

.pricing-features ul {
  list-style: none;
  padding: 0;
}

.pricing-features li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 0;
  color: #4a5568;
}

.feature-check {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 50%;
  font-size: 0.8rem;
  font-weight: bold;
}

.pricing-action {
  position: relative;
  z-index: 2;
}

.pricing-button {
  display: block;
  width: 100%;
  text-align: center;
  padding: 1rem 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-decoration: none;
  border-radius: 12px;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

.pricing-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
  background: linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%);
}

@media (max-width: 1024px) {
  .content-layout {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .sidebar {
    position: static;
  }
}

@media (max-width: 768px) {
  .product-title {
    font-size: 2rem;
  }

  .content-section {
    padding: 2rem;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .pricing-grid {
    grid-template-columns: 1fr;
  }

  .image-wrapper {
    padding: 1rem;
  }
}
</style>
