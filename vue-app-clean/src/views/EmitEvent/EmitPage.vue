<template>
  <div class="emit-page">
    <h1>Emit Page (Parent)</h1>
    <h4>Recive Emitted Data From Child</h4>
    <p>Emit Value:- {{ emitData.value }}</p>
    <p>Emit Message:- {{ emitData.message }}</p>
    <p>Emit Source:- {{ emitData.source }}</p>
    <emit-component
      @EmitObjectToParent="EmitObjectToParentFunc($event)"
    ></emit-component>
    <hr />
    <hr />
    <p>Emit Id:- {{ emitPracticsData.id }}</p>
    <p>Emit MSG:- {{ emitPracticsData.msg }}</p>
    <emit-best-practis
      @EmitDataToParent="EmitBestPractisFunc($event)"
    ></emit-best-practis>
  </div>
</template>

<script>
import EmitComponent from "@/components/EmitEvent/EmitEvent.vue";
import EmitBestPractis from "@/components/EmitEvent/EmitBestPractics.vue";

export default {
  data() {
    return {
      emitData: {},
      emitPracticsData: {},
    };
  },
  components: {
    EmitComponent,
    EmitBestPractis,
  },
  methods: {
    EmitObjectToParentFunc(data) {
      this.emitData = data;
    },
    EmitBestPractisFunc(data) {
      this.emitPracticsData = data;
    },
  },
};
</script>
