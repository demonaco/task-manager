module.exports = function (sequelize, DataTypes) {
    var Task = sequelize.define("Task", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        due_date: {
            type: DataTypes.DATE,
        },
        status: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    });

    Task.associate = function (models) {
        Task.belongsTo(models.Project, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Task;
};
