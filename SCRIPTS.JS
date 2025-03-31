function convertCurrency() {
    var amount = document.getElementById('amount').value;
    var currency = document.getElementById('currency').value;
    var result = document.getElementById('result');

    if (!amount || amount <= 0) {
        result.innerHTML = "הזן סכום תקין.";
        return;
    }

    var exchangeRate = 0;

    if (currency === 'usd') {
        exchangeRate = 3.5; // Example conversion rate for USD to ILS
    } else if (currency === 'eur') {
        exchangeRate = 4.0; // Example conversion rate for EUR to ILS
    }

    var convertedAmount = amount * exchangeRate;
    result.innerHTML = `הסכום בהמרה: ${convertedAmount.toFixed(2)} ש"ח`;
}

function calculateFlights() {
    var destination = document.getElementById('destination').value;
    var passengerCount = document.getElementById('passengerCount').value;
    var finalPrice = document.getElementById('finalPrice');

    if (!destination || !passengerCount || passengerCount <= 0) {
        finalPrice.innerHTML = "הזן יעד וכמות נוסעים.";
        return;
    }

    var flightCost = 200; // Example cost per passenger
    var totalPrice = flightCost * passengerCount;

    finalPrice.innerHTML = `המחיר הכולל לטיסות: ${totalPrice.toFixed(2)} ש"ח`;
}

function findHotel() {
    var hotelDestination = document.getElementById('hotelDestination').value;
    var hotelPrices = document.getElementById('hotelPrices');

    if (!hotelDestination) {
        hotelPrices.innerHTML = "הזן יעד לחיפוש.";
        return;
    }

    var hotels = [
        { name: "מלון א', price: 250 },
        { name: "מלון ב', price: 300 },
        { name: "מלון ג', price: 450 },
    ];

    hotelPrices.innerHTML = '';
    hotels.forEach(function(hotel) {
        var li = document.createElement('li');
        li.textContent = `${hotel.name} - ${hotel.price} ש"ח`;
        hotelPrices.appendChild(li);
    });
}
