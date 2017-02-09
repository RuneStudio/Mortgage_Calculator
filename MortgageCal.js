

function CalculateAmortizedPayment(rate, numberOfPayments, presentValue) {
    var pvif = Math.pow(1 + rate, numberOfPayments);
    var payment = rate / (pvif - 1) * -(presentValue * pvif);
    return payment;
}

function computeSchedule(loanAmount, interestRate, paymentPerYear, years, payment) {
    var schedule = [];
    var remaining = loanAmount;
    var numberOfPayments = paymentPerYear * years;
    for (var i = 0; i <= numberOfPayments; i++) {
        var interest = remaining * (interestRate / 100 / paymentPerYear);
        var principle = (payment - interest);
        var row = [i, principle > 0 ? principle : 0, interest > 0 ? interest : 0, remaining > 0 ? remaining : 0];
        schedule.push(row);
        remaining -= principle;
    }
}