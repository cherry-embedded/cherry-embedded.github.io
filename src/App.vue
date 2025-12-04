<template>
  <div id="app">
    <nav class="navbar">
      <div class="nav-container">
        <router-link to="/" class="nav-brand">
          🍒 Cherry Embedded
        </router-link>
        <div class="nav-links">
          <div class="language-switch">
            <button class="lang-btn" :class="{ active: currentLang === 'zh' }" @click="switchLang('zh')">中</button>
            <button class="lang-btn" :class="{ active: currentLang === 'en' }" @click="switchLang('en')">EN</button>
          </div>
          <a href="https://github.com/cherry-embedded" target="_blank" class="github-btn">
            <span class="btn-icon">🐙</span>
            GitHub
          </a>
          <a href="1203593632@qq.com" class="contact-btn">
            <span class="btn-icon">✉️</span>
            联系我们
          </a>
        </div>
      </div>
    </nav>
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const currentLang = ref('zh')

const switchLang = (lang: 'zh' | 'en') => {
  currentLang.value = lang
  // 这里可以添加实际的语言切换逻辑
  console.log('切换语言到:', lang)
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #ffffff;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.navbar {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #e2e8f0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand {
  font-size: 1.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-decoration: none;
  transition: all 0.2s ease;
}

.nav-brand:hover {
  transform: scale(1.05);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.language-switch {
  display: flex;
  background: rgba(102, 126, 234, 0.1);
  border-radius: 20px;
  padding: 0.25rem;
  border: 1px solid rgba(102, 126, 234, 0.2);
}

.lang-btn {
  background: transparent;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 16px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #667eea;
  cursor: pointer;
  transition: all 0.2s ease;
}

.lang-btn.active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
}

.lang-btn:hover:not(.active) {
  background: rgba(102, 126, 234, 0.1);
}

.github-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #24292f 0%, #57606a 100%);
  color: white;
  text-decoration: none;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(36, 41, 47, 0.3);
}

.github-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(36, 41, 47, 0.4);
  background: linear-gradient(135deg, #1c2128 0%, #484f58 100%);
}

.contact-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-decoration: none;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

.contact-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
  background: linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%);
}

.btn-icon {
  font-size: 1rem;
}

.main-content {
  flex: 1;
}

@media (max-width: 768px) {
  .nav-container {
    padding: 1rem;
  }

  .nav-brand {
    font-size: 1.25rem;
  }

  .nav-links {
    gap: 1rem;
  }

  .github-btn,
  .contact-btn {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }

  .language-switch {
    padding: 0.2rem;
  }

  .lang-btn {
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
  }
}
</style>
