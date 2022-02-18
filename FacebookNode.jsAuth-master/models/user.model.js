module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
        uid: {
        type: Sequelize.STRING
      },
      token: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      pic: {
        type: Sequelize.STRING
      },

    });
  
    return User;
  };
  