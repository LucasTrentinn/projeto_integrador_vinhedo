const { type } = require('os')
const {Sequelize, DataTypes} = require('sequelize')
require('dotenv').config()

const sequelize = new Sequelize(process.env.DB_LINK, {dialect: 'postgres'})

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      is: /^(?=.*[a-z])[A-Za-z\d]{4,18}$/
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      is: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&.]{8,}$/
    }
  },
  name: {
    type: DataTypes.STRING,
    validate: {
      is: /^[A-Za-z ]{1,}$/
    }
  },
  picture: {
    type: DataTypes.STRING
  },
  country: {
    type: DataTypes.STRING
  },
  state: {
    type: DataTypes.STRING
  },
  city: {
    type: DataTypes.STRING
  },
  bio: {
    type: DataTypes.TEXT
  }
})

User.checkLogin = function (user, password) {
  return this.list().find(user => user.user && user.password)
}

const Wine = sequelize.define('Wine', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  grape: {
    type: DataTypes.STRING,
    allowNull: false
  },
  season: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  harmonization: {
    type: DataTypes.STRING,
    allowNull: false
  },
  volume: {
    type: DataTypes.STRING,
    allowNull: false
  },
  region: {
    type: DataTypes.STRING
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

const WineMenu = sequelize.define('WineMenu', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

const Rating = sequelize.define('Rating', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  comment: {
    type: DataTypes.TEXT
  },
  picture: {
    type: DataTypes.STRING
  }
})

User.hasMany(WineMenu)
WineMenu.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Wine.hasMany(Rating)
Rating.belongsTo(Wine)

module.exports.User = User
module.exports.Wine = Wine
module.exports.WineMenu = WineMenu
module.exports.Rating = Rating
module.exports.sequelize = sequelize