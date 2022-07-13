<template>
  <section class="container">
    <h2>编程导航</h2>
    <main class="list">
      <div class="box" v-for="i in nav" :key="i.id">
        <a :href="i.link" target="_blank">
          <div class="flex">
            <img :src="i.icon" />
            <div class="title">{{ i.title }}</div>
          </div>
          <div class="des">
            {{ i.des }}
          </div>
        </a>
      </div>
    </main>

    <h2>快速上手</h2>
    <main class="list">
      <div class="box" v-for="i in play" :key="i.id">
        <a :href="i.link" target="_blank">
          <div class="flex">
            <img :src="i.icon" />
            <div class="title">{{ i.title }}</div>
          </div>
          <div class="des">
            {{ i.des }}
          </div>
        </a>
      </div>
    </main>
  </section>
</template>

<script>
export default {
  data() {
    return {
      nav: [
        {
          id: 1,
          title: 'Javascript.Info',
          des: '最好的Javascript教程',
          link: 'https://zh.javascript.info',
          icon: './js.png'
        },
        {
          id: 2,
          title: 'Vue.js',
          des: '渐进式框架',
          link: 'https://vuejs.org',
          icon: './vue.png'
        },
        {
          id: 3,
          title: 'tailwindcss',
          des: '超好用的CSS工具',
          link: 'https://tailwindcss.com',
          icon: './tailwindcss.png'
        },
        {
          id: 4,
          title: 'VitePress',
          des: '快速文档编写工具',
          link: 'https://vitepress.vuejs.org',
          icon: './vue.png'
        }
      ],
      play: [
        {
          id: 1,
          title: 'Vue',
          des: 'Playground',
          link: 'https://sfc.vuejs.org',
          icon: './vue.png'
        },
        {
          id: 2,
          title: 'tailwind',
          des: 'Playground',
          link: 'https://play.tailwindcss.com',
          icon: './tailwindcss.png'
        },
        {
          id: 3,
          title: 'CodePen',
          des: 'Playground',
          link: 'https://codepen.io',
          icon: './codepen.png'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  padding: 0 24px;

  @media (min-width: 640px) {
    padding: 0 48px;
  }

  @media (min-width: 960px) {
    padding: 0 64px;
  }
}

h2 {
  margin: 32px auto 16px;
  max-width: 1152px;
  padding-left: 8px;
  letter-spacing: 2px;
  font-size: 24px;
  font-weight: bold;
  // 实验性功能，兼容性
  background: linear-gradient(305deg, #4b6cb7, #182848);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

.dark h2 {
  // 实验性功能，兼容性
  background: linear-gradient(248deg, #ffeeee, #ddefbb);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

.list {
  margin: 0 auto;
  max-width: 1152px;
  display: flex;
  flex-flow: row wrap;
}

.box {
  --gap: 8px;
  width: 100%;
  padding: var(--gap) 0;
  position: relative;

  @media (min-width: 768px) {
    width: 50%;
    padding: var(--gap);
  }

  @media (min-width: 960px) {
    width: 25%;
    padding: var(--gap);
  }
}

a {
  display: flex;
  flex-flow: column;
  color: white;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  width: 100%;
  padding: 24px 24px 16px 24px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;

  &:hover::after {
    opacity: 1;
  }

  &::after {
    position: absolute;
    width: 100%;
    height: 100%;
    content: '';
    top: 0;
    left: 0;
    background: url('https://s1.ax1x.com/2022/07/13/jReEp6.png') center / cover;
    opacity: 0.8;
    transition: all 0.3s;
  }

  .flex {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
  }

  img {
    width: 32px;
    height: auto;
    position: relative;
    z-index: 2;
    border-radius: 8px;
  }

  .title {
    padding: 8px 16px;
    position: relative;
    z-index: 2;
  }

  .des {
    padding: 4px;
    position: relative;
    z-index: 2;
    font-size: 12px;
    opacity: 0.8;
  }
}
</style>