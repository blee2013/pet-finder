const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model { }

Comment.init(
    {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        comment_text: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1]
          }
        },
        // user_id: {
        //   type: DataTypes.INTEGER,
        //   references: {
        //     model: 'user',
        //     key: 'id'
        //   }
        // },
        pet_id: {
          type: DataTypes.INTEGER,
          references: {
            model: 'Pet',
            key: 'id'
          }
        }
      },
    // {
    //     comment_text: {
    //         type: DataTypes.STRING,
    //         allowNull: false,
    //     },
    // },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Comment',
    }
);

module.exports = Comment;
