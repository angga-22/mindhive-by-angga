<template>
  <div>
    <label :for="name">{{ label }}</label>
    <div :class="{ 'flex-row': cardNumber }">
      <input
        :name="name"
        :type="type"
        v-model="inputValue"
        @input="handleChange"
        :placeholder="placeholder"
        :class="{ 'w-full': cardNumber }"
      />
      <div v-if="cardNumber" class="card-icon">
        <img width="40" src="@/assets/icons/card/amex.svg" alt="icon" />
        <img width="40" src="@/assets/icons/card/mastercard.svg" alt="icon" />
        <img width="40" src="@/assets/icons/card/visa.svg" alt="icon" />
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "Field",
  props: {
    label: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
    },
    cardMonth: {
      type: Boolean,
      required: false,
      default: false,
    },
    cardNumber: {
      type: Boolean,
      required: false,
      default: false,
    },
    cardCvv: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup(props, { emit }) {
    const inputValue = ref("");
    const handleChange = (e) => {
      if (props.cardMonth) {
        const value = e.target.value;
        const regex = /(?<=\d{2})\d{2}/g;
        const newValue = value.replace(regex, "/$&");
        inputValue.value = newValue;
        if (inputValue.value.length > 5) {
          inputValue.value = inputValue.value.slice(0, 5);
        }
      }
      if (props.cardNumber) {
        const value = e.target.value;
        const regex = /(?<=\d{4})\d{3}/g;
        const newValue = value.replace(regex, " $&");
        inputValue.value = newValue;
        if (inputValue.value.length > 16) {
          inputValue.value = inputValue.value.slice(0, 16 + 3);
        }
      }
      if (props.cardCvv) {
        const value = e.target.value;
        const regex = /(?<=\d{4})\d{1}/g;
        const newValue = value.replace(regex, " $&");
        inputValue.value = newValue;
        if (inputValue.value.length > 3) {
          inputValue.value = inputValue.value.slice(0, 3 + 1);
        }
      }
      emit("input", inputValue.value);
    };
    return { handleChange, inputValue };
  },
});
</script>
<style scoped>
input {
  padding: 0.5rem;
  margin: 0.5rem 0;
  height: 28px;
  border: none;
  background-color: #fff;
  color: #000;
  font-size: 1rem;
  outline: none;
  border-radius: 0.2rem;
}
.w-full {
  width: 70%;
}
div {
  display: flex;
  flex-direction: column;
}
.flex-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.card-icon {
  background: #fff;
  height: 28px;
  padding: 0.5rem;
  border: none;
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
</style>