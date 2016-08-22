
class Utility{
    static getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    static getRandomInt(limit){
        return Math.floor(Math.random() * limit);
    }
}

module.exports = Utility;