<template>
  <div class="">
    <h1
      class="text-start text-capitalise border-bottom border-5 border-success"
    >
      Terms and Conditions
    </h1>
    <TextBlock v-for="(t, index) in terms" :key="index">
      <template #header>{{index+1}}. {{t.title}} </template>
      <p v-for="(text, index) in t.text" :key="index" >{{text}}</p>
    </TextBlock>
    <div class="text-center">
      <button class="btn btn-success px-4" @click.prevent="$emit('setStep', 'step-3')">Next</button>
    </div>
  </div>
</template>

<script>
import TextBlock from "./components/TextBlock.vue";
export default {
  components: { TextBlock },
  data() {
    return {
      terms: [
        {
          title: 'Lorem ipsum dolor sit amet.',
          text: [
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore exercitationem minus fuga amet, ipsum alias provident eos similique, laudantium laboriosam rerum saepe sunt dolorum ullam expedita enim. Tenetur, quibusdam delectus.',
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore exercitationem minus fuga amet, ipsum alias provident eos similique, laudantium laboriosam rerum saepe sunt dolorum ullam expedita enim. Tenetur, quibusdam delectus.',
          ]
        },
        {
          title: 'Lorem ipsum dolor sit amet.',
          text: [
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore exercitationem minus fuga amet, ipsum alias provident eos similique, laudantium laboriosam rerum saepe sunt dolorum ullam expedita enim. Tenetur, quibusdam delectus.',
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore exercitationem minus fuga amet, ipsum alias provident eos similique, laudantium laboriosam rerum saepe sunt dolorum ullam expedita enim. Tenetur, quibusdam delectus.',
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore exercitationem minus fuga amet, ipsum alias provident eos similique, laudantium laboriosam rerum saepe sunt dolorum ullam expedita enim. Tenetur, quibusdam delectus.',
          ]
        },
        {
          title: 'Lorem ipsum dolor sit amet.',
          text: [
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore exercitationem minus fuga amet, ipsum alias provident eos similique, laudantium laboriosam rerum saepe sunt dolorum ullam expedita enim. Tenetur, quibusdam delectus.',
          ]
        }
      ]
    }
  },
};
</script>

<style>
</style>