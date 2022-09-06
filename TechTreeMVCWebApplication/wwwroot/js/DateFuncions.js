
function AddSubtractMonths(date, numMonths) {
    var months = date.getMonths();

    var milliSeconds = new Date(date).setMonth(month + numMonths);

    return new Date(milliSeconds);
}