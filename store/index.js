import gql from "graphql-tag";

export const state = () => ({
    siteData: []
});

export const actions = {
    async callApollo({ commit }) {
      let response = await this.app.apolloProvider.defaultClient.query({
        // query: gql`query GetGames {
        //     favoriteGames {
        //       id
        //       image
        //       name
        //       rating
        //       gameUser {
        //         id
        //         name
        //         profileImg
        //       }
        //     }
        //   }`
        query: gql`query getVids {
          threeByThirteenProject {
             videoId
            videoUrl
            title
            img
          }
        }`
      });
   
      await commit("updateData", response.data.siteData);
    }
};

export const mutations = {
    updateData: (state, data) => {
      state.siteData = data;
    }
};