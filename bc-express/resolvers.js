const User = require("./models").User;
const Bevent = require("./models").Bevent;
const Message = require("./models").Message;
const GuestList = require("./models").GuestList;
const Place = require("./models").Place;

const resolvers = {
  Query: {
    user(root, args) {
      return User.find({ where: args });
    },
    users() {
      return User.findAll();
    },
    messages() {
      return Message.findAll();
    },
    places() {
      return Place.findAll();
    },
    currentEvent() {
      return Bevent.findOne({
        limit: 1,
        order: [["date", "DESC"]]
      });
    }
    // event (root, args){
    //   return Bevent.find({
    //     where: args,
    //     include: [
    //       { model: ChallengeProduct, as: "challengeProducts" },
    //       { model: ChallengeUserMedia, as: "challengeUserMedia" },
    //       { model: SolutionProduct, as: "solutionProducts" },
    //       { model: SolutionNote, as: "solutionNotes" },
    //       {
    //         model: SolutionQuote,
    //         as: "solutionQuotes",
    //         include: [{ model: Quote, as: "quote" }]
    //       }
    //     ]
    //    })
    // }
  }
};

exports.resolvers = resolvers;
