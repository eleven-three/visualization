<template>
  <div style="height: 100%">
    <h3 style="font-size: 25px; margin-left: 30px">当天发送</h3>
    <div class="content">
      <dv-decoration-9 style="width: 200px; height: 200px; font-size: 35px">{{
        str
      }}</dv-decoration-9>
    </div>
  </div>
</template>

<script>
import { getRandom } from "../utils/index";
export default {
  name: "daySendTotal",
  components: {},
  props: {},
  data() {
    return {
      str: 0,
    };
  },
  computed: {},
  watch: {},
  created() {
    this.initDaySendTotal();
  },
  methods: {
    initDaySendTotal() {
      const hours = new Date().getHours();

      if (hours === 0) {
        this.str = getRandom(2000, 3000);
      } else if (hours === 1) {
        this.str = getRandom(3000, 4500);
      } else if (hours === 2) {
        this.str = getRandom(4500, 5500);
      } else if (hours === 3) {
        this.str = getRandom(5500, 6000);
      } else if (hours === 4) {
        this.str = getRandom(6000, 6500);
      } else if (hours === 5) {
        this.str = getRandom(6500, 7000);
      } else if (hours === 6) {
        this.str = getRandom(7000, 7500);
      } else if (hours === 7) {
        this.str = getRandom(7500, 9000);
      } else if (hours === 8) {
        this.str = getRandom(9000, 20000);
      } else if (hours === 9) {
        this.str = getRandom(20000, 50000);
      } else if (hours === 10) {
        this.str = getRandom(50000, 100000);
      } else if (hours === 11) {
        this.str = getRandom(100000, 140000);
      } else if (hours === 12) {
        this.str = getRandom(140000, 170000);
      } else if (hours === 13) {
        this.str = getRandom(170000, 210000);
      } else if (hours === 14) {
        this.str = getRandom(210000, 250000);
      } else if (hours === 15) {
        this.str = getRandom(250000, 300000);
      } else if (hours === 16) {
        this.str = getRandom(300000, 350000);
      } else if (hours === 17) {
        this.str = getRandom(350000, 400000);
      } else if (hours === 18) {
        this.str = getRandom(400000, 440000);
      } else if (hours === 19) {
        this.str = getRandom(440000, 480000);
      } else if (hours === 20) {
        this.str = getRandom(480000, 510000);
      } else if (hours === 21) {
        this.str = getRandom(510000, 530000);
      } else if (hours === 22) {
        this.str = getRandom(530000, 550000);
      } else if (hours === 23) {
        this.str = getRandom(550000, 560000);
      }

      setInterval(() => {
        if (hours === 0) {
          this.str++;
        } else if (hours === 1) {
          this.str++;
        } else if (hours === 2) {
          this.str++;
        } else if (hours === 3) {
          this.str++;
        } else if (hours === 4) {
          this.str++;
        } else if (hours === 5) {
          this.str++;
        } else if (hours === 6) {
          this.str++;
        } else if (hours === 7) {
          this.str++;
        } else if (hours === 8) {
          this.str += getRandom(4, 8);
        } else if (hours === 9) {
          this.str += getRandom(10, 15);
        } else if (hours === 10) {
          this.str += getRandom(10, 15);
        } else if (hours === 11) {
          this.str += getRandom(10, 15);
        } else if (hours === 12) {
          this.str += getRandom(10, 15);
        } else if (hours === 13) {
          this.str += getRandom(10, 15);
        } else if (hours === 14) {
          this.str += getRandom(10, 15);
        } else if (hours === 15) {
          this.str += getRandom(10, 15);
        } else if (hours === 16) {
          this.str += getRandom(10, 15);
        } else if (hours === 17) {
          this.str += getRandom(10, 15);
        } else if (hours === 18) {
          this.str += getRandom(12, 15);
        } else if (hours === 19) {
          this.str += getRandom(10, 12);
        } else if (hours === 20) {
          this.str += getRandom(8, 10);
        } else if (hours === 21) {
          this.str += getRandom(5, 8);
        } else if (hours === 22) {
          this.str++;
        } else if (hours === 23) {
          this.str++;
        }
      }, 1000);
    },
  },
};
</script>

<style scoped>
.content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
