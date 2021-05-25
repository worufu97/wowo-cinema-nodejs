'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class ShowTime extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.belongsTo(models.Room, { foreignKey: 'roomId' });
            this.belongsTo(models.Movie, { foreignKey: 'movieId' });
        }
    }
    ShowTime.init(
        {
            movieId: DataTypes.INTEGER,
            roomId: DataTypes.INTEGER,
            time: DataTypes.STRING,
            price: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'ShowTime',
        }
    );
    return ShowTime;
};
