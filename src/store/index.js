import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      loadedMeetups: [
        {
          img: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/474000/474772-Australia.jpg",
          title: "Meet Up In Sydney",
          date: "10/3/2023",
          id: "sannojesnwk",
        },
        {
          img: "https://media.timeout.com/images/105171709/image.jpg",
          title: "Meet Up In Stockholm",
          date: "15/3/2023",
          id: "ejwwdckjewo",
        },
      ],
      user: {
        id: "sdhjweiwue",
        registeredMeetups: ["ejwwdckjewo"],
      },
    };
  },

  getters: {
    loadedMeetups(state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date;
      });
    },
    loadedMeetup(state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId;
        });
      };
    },
    featuredMeetups(state, getters) {
      return getters.loadedMeetups.slice(0, 5);
    },
  },
});

export default store;
