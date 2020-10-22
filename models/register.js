module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('student', {
        firstname: {
            type: DataTypes.STRING(255)
        },
        lastname: {
            type: DataTypes.STRING(255)
        },
        email: {
            type: DataTypes.STRING(255)
        },
        department: {
            type: DataTypes.STRING(255)
        },
        subject: {
            type: DataTypes.STRING(255)
        }
    }, {
        tableName: 'student',
        timeStamp: false
    });
    return model;
}