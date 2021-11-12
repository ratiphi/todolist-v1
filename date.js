module.exports.getDate = function() {
    const today = new Date();
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    return currentDay = today.toLocaleDateString("en-US", options);
}

exports.getDay = () => {
    const today = new Date();
    const options = {
        weekday: "long"
    };
    return currentDay = today.toLocaleDateString("en-US", options);
}