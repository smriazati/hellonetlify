<template>
  <div class="container">
    <section v-if="tut" class="tut">
      <h1 v-if="tut.name">{{ tut.name }}</h1>
      <p v-if="tut.url"><a :href="tut.url" target="_blank">Tutorial</a></p>
      <p v-if="tut.repo"><a :href="tut.repo" target="_blank">Repo</a></p>
    </section>
    <section>
      <form @submit.prevent="handleFormSubmit">
        <div class="form-row">
          <div class="form-group">
            <label for="street">Street</label>
            <input v-model="formData.street" name="street" type="text" />
          </div>
          <div class="form-group">
            <label for="city">City</label>
            <input v-model="formData.city" name="city" type="text" />
          </div>
          <div class="form-group">
            <label for="state">State</label>
            <input v-model="formData.state" name="state" type="text" />
          </div>
          <div class="form-group">
            <label for="zip">Zip</label>
            <input v-model="formData.zip" name="zip" type="text" />
          </div>
          <div class="form-group">
            <button :disabled='formDisabled' type="submit">Submit</button>
          </div>
        </div>
      </form>
    </section>
    <section>
      <GmapMap
        :center="{ lat: 39, lng: -100 }"
        :zoom="4"
        map-type-id="roadmap"
        style="width: 50vw; height: 500px"
      >
        <div v-if="savedLocations.length > 0">
          <GmapMarker
            :key="index"
            v-for="(m, index) in savedLocations"
            :position="{ lat: m.geoPoint.latitude, lng: m.geoPoint.longitude }"
          />
        </div>
      </GmapMap>
    </section>
  </div>
</template>

<script>
import { db } from "~/plugins/firebase";
// import axios from "axios";

export default {
  data() {
    return {
      savedLocations: [],
      formData: {
        street: "",
        city: "",
        state: "",
        zip: "",
      },
      tut: {
        name: "Address Geocoding with Google Maps API, Firebase, and VueJs",
        url:
          "https://www.youtube.com/watch?v=L6DhmAnq_IY&ab_channel=DiligentDev",
        date: "11/1/2020",
        repo:
          "https://bitbucket.org/TheDiligentDev/google-address-geocoding/src/master/",
      },
    };
  },
  computed: {
      formDisabled: function() {
          if (
                !this.formData.street ||
                !this.formData.state ||
                !this.formData.city ||
                !this.formData.zip
            ) {
                return true;
            }

            return false;
      }
  },
  async beforeMount() {
    const snap = await db.collection("geocodingLocations").get();
    snap.docs.forEach((doc) => {
      this.savedLocations.push(doc.data());
    });
  },
  methods: {
    async handleFormSubmit() {
      if (
        !this.formData.street ||
        !this.formData.state ||
        !this.formData.city ||
        !this.formData.zip
      ) {
          console.log('not enough address');
          return;
      }

      const address = `${this.formData.street}, ${this.formData.city} ${this.formData.state} ${this.formData.zip}`

      
      let { d } = await this.$axios.post("", {
          address: address,
      });


  // const config = {
  //   headers: {
  //     'Content-Type': 'application/json',
  //     Authorization: 'sometoken'
  //   }
  // };

  // axios
  //   .post(
  //     'https://jsonplaceholder.typicode.com/todos',
  //     {
  //       title: 'New Todo',
  //       completed: false
  //     },
  //     config
  //   )
  //   .then(res => showOutput(res))
  //   .catch(err => console.error(err));


      console.log('D is ' + data);

      if (data === "No Results") {;
          console.log("No result found for address.")
          return;
      }

      if (data) {
        const obj = {
            address: data.address,
            geoPoint: {
                latitude: data.geoPoint._latitude,
                longitude: data.geoPoint._longitude
            }
        }

        this.savedLocations.push(obj);
        console.log('adding object')
      }

      console.log('clearing form');
      this.formData.street = '';
      this.formData.state = '';
      this.formData.city = '';
      this.formData.zip = '';
    },
  },
};
</script>

<style lang='scss'>
</style>