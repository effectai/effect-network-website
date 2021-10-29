<template>
  <div class="accordion-box v-accordion-box" :class="{'is-active': isOpen}">
    <div class="accordion-head" @click="isOpen = !isOpen">
      <div class="title-accordion">
        <slot name="title" />
      </div>
      <div class="right-icon">
        <slot name="icon" v-if="$slots['icon']" />
          <svg width="30" height="17" viewBox="0 0 30 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L15 15L29 1" stroke="white" stroke-width="2"/>
          </svg>
      </div>
    </div>
    <div class="accordion-content" v-if="isOpen">
        <div class="v-content">
            <slot name="content"/>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      isOpen: false
    }
  },
  mounted(){
    let _this = this
    this.$root.$emit('close', () => {
      _this.isOpen = false
    })
    window.addEventListener('click', (e) => {
      if (!this.$el.contains(e.target)) {
        _this.isOpen = false
      }
    })
  }
}
</script>
<style scoped lang="scss">
.accordion-box {
  width: 100%;
  position: relative;
  border-bottom: 2px solid $white;

  &.is-active {
    border-bottom-color: transparent;
    & .accordion-head {
      padding-bottom: 24px;

      .title-accordion * {
        color: #FFAE0D
      }
    }
    & .right-icon svg{
     transform: rotateX(-180deg);
      path {
        stroke: #FFAE0D
      }
    }
  }

  .accordion-head {
    position: relative;
    text-align: start;
    padding: 30px;
    cursor: pointer;
    padding-right: 80px;
    background: transparent;
    display: flex;
    align-items: center;
    
    .title-accordion * {
      margin: 0;
    }
  }
}
.right-icon svg{
    transition: 0.3s;
}
.accordion-content{
    background: transparent;
    width: 100%;
    position: relative;
    max-height: 370px;
    overflow: auto;
    padding-bottom: 30px;
}
.accordion-box .v-content{
    text-align: start;
    padding-right: 30px;
    padding-left: 30px;
}

.accordion-head .right-icon {
  display: flex;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 30px;
}
@media screen and (max-width: 500px){
    .accordion-head{
        padding-top: 24px;
        padding-left: 16px;
        padding-right: 54px;
    }
    .accordion-box{
        width: 100%;
    }
    .right-icon{
        top: 24px !important;
        right: 16px !important;
        transform: inherit !important;
    }
    .v-content{
        padding-right: 16px !important;
        padding-left: 16px !important;
    }
}
</style>