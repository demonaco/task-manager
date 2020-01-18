module.exports = function (sequelize, DataTypes) {
    var Project = sequelize.define("Project", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
    });

    Project.associate = function (models) {
        Project.hasMany(models.Task, {
            onDelete: "cascade"
        });

        // Project.belongsTo(models.User, {
        //     foreignKey: {
        //         allowNull: false
        //     }
        // });
    };

    return Project;
};
