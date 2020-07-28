<template>
  <div class="flexbox">
    <div>
      <div class="dot-loader"></div>
      <div class="dot-loader dot-loader--2"></div>
      <div class="dot-loader dot-loader--3"></div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
<style scoped>

  .flexbox {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .flexbox > div {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    overflow: hidden;
  }

  .dot-loader {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: #f05f95;
    position: relative;
    -webkit-animation: 1.2s grow ease-in-out infinite;
    animation: 1.2s grow ease-in-out infinite;
  }

  .dot-loader--2 {
    -webkit-animation: 1.2s grow ease-in-out infinite 0.15555s;
    animation: 1.2s grow ease-in-out infinite 0.15555s;
    margin: 0 20px;
  }
  .dot-loader--3 {
    -webkit-animation: 1.2s grow ease-in-out infinite 0.3s;
    animation: 1.2s grow ease-in-out infinite 0.3s;
  }

  @-webkit-keyframes grow {
    0%, 40%, 100% {
      -webkit-transform: scale(0);
              transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
              transform: scale(1);
    }
  }
  @keyframes grow {
    0%, 40%, 100% {
      -webkit-transform: scale(0);
              transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
              transform: scale(1);
    }
  }
</style>
