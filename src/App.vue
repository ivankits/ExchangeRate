<template>
  <div class="container bg">
    <div class="inputs">
      <div class='currency'>
        <input ref="leftInp" @keyup="leftKey" type="number" v-bind:style="leftInputBackground" />
        <label  for="chooseLeft">Choose currency:</label>
        <select  @change="leftSelect" v-model="leftCurrency" id="chooseLeft">
          <option style="background-color: lightcyan" v-for="v in currencies" :value="v" :key="v">{{this.currencyTable[v].name }}</option>
        </select>
      </div>
      <img class="inbeetween" src="@/assets/svg/two-arrows.svg" />
      <div class='currency'>
        <input ref="rightInp" @keyup="rightKey" type="number" v-bind:style="rightInputBackground" />
        <label for="chooseRight">Choose currency:</label>
        <select @change="rightSelect" v-model="rightCurrency" id="chooseRight">
          <option style="background-color: lightcyan" v-for="v in currencies" :value="v" :key="v">{{ this.currencyTable[v].name }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/global.css'
import axios from 'axios'
export default {
  name: 'App',
  data: () => (
    {
      leftValue: '',
      rightValue: '',
      rates: [],
      currencyTable: {},
      leftCurrency: 'us dollar',
      rightCurrency: 'us dollar',
      currencies: [],
      q: 1
    }
  ),
  watch: {
    
  },
  methods: {
    leftKey(e)
    {
      this.$refs.rightInp.value=((e.target.value-0)*this.q).toFixed(2);
    },
    rightKey(e)
    {
      this.$refs.leftInp.value=
      ((e.target.value-0)/this.q).toFixed(2);
    },
    getLocal () {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
      const positions = timezone.split('/').reverse()
      let current = ''
      for (let i = 0; i < positions.length; i++) {
        console.log (positions[i]);
        for (let j = 0; j < this.currencies.length; j++) {
          if (this.currencyTable[this.currencies[j]].position.includes(positions[i])) {
            current = this.currencies[j]
            break;
          }
          if (current) break
        }
      }
      current=current||"us dollar"
      this.leftCurrency=current
      this.rightCurrency='us dollar'
    },

    leftSelect(e)
    {
this.initQ();
this.$refs.leftInp.value=
      ((this.$refs.rightInp.value)/this.q).toFixed(2);
    },
    rightSelect(e)
    {
      this.initQ()
      this.$refs.rightInp.value=
      ((this.$refs.leftInp.value)*this.q).toFixed(2);
    },
    initQ () {
      this.q = this.rates[this.currencyTable[this.rightCurrency].code] / this.rates[this.currencyTable[this.leftCurrency].code]
    }
  },
  created () {
    this.currencyTable = require('./assets/table.json')
    Object.keys(this.currencyTable).forEach(v => {
      this.currencies.push(v)
    })
    const options = {
      method: 'GET',
      url: ' https://open.er-api.com/v6/latest/USD'
    }

    axios.request(options).then((response) => {
      this.rates = response.data.rates
      this.rates.USD = 1
      this.initQ()
    }).catch(function (error) {
      console.error(error)
    })
    this.getLocal()
  },
  computed:
  {
    leftInputBackground () {
      const r = {
        background: 'url(' + require('./assets/svg/' + this.leftCurrency.replaceAll(' ', '_') + '.svg') + ')',
        'background-repeat': 'no-repeat',
        'background-size': '8vmin,8vmin',
        'background-position': '1vmin, 1vmin'
      }
      return r
    },
    rightInputBackground () {
      const r = {
        background: 'url(' + require('./assets/svg/' + this.rightCurrency.replaceAll(' ', '_') + '.svg') + ')',
        'background-repeat': 'no-repeat',
        'background-size': '8vmin,8vmin',
        'background-position': '1vmin, 1vmin'
      }
      return r
    }
  },
  components: {
  }

}
</script>

<style>
* {
  border-radius: 10px;
  font-size: 5vmin;
  background: transparent;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.inputs {
  width: 80vw;
  height: 30vmin;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
}

.inbeetween {
  width: 15vw;
  height: 10vmin;
}

input {
  
  padding-left: 30px;
  text-align: center;
  border: 1vmin solid black;
  font-size: 5vmin;
  border-radius: 10px;
  width: 25vw;
  height: 10vmin;
  padding-left: 30px;
}

input:focus {
  border: 1vmin solid green !important;
}

.currency {
  display: flex;
  flex-flow: column;
  height: 30vmin;
  justify-content: space-around
}

.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: top;
  align-items: center;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

.bg {
  background-size: 300% 300%;
  background-image: linear-gradient(-45deg,
      rgba(59, 173, 227, 1) 0%,
      rgb(236, 234, 152) 25%,
      rgb(208, 110, 243) 51%,
      rgb(246, 130, 172) 100%);
  animation: AnimateBG 20s ease infinite;
}

@keyframes AnimateBG {
  0% {
    background-position: 0% 50%
  }

  50% {
    background-position: 100% 50%
  }

  100% {
    background-position: 0% 50%
  }
}
</style>
