async function fetchExchangeRates() {
    let apiKey = '75bf0f0b53c295e7ac893335';  // ה-API Key שלך
    try {
        let response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`);
        let data = await response.json();
        return { usd: data.conversion_rates.ILS, eur: data.conversion_rates.ILS / data.conversion_rates.EUR };
    } catch (error) {
        console.error("שגיאה בעדכון שערי המטבע. משתמשים בשערים קבועים.");
        return { usd: 3.56, eur: 3.73 }; // שערים קבועים במקרה של שגיאה
    }
}

async function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const currency = document.getElementById('currency').value;

    if (amount === "") {
        alert("נא להזין סכום להמרה.");
        return;
    }

    const rates = await fetchExchangeRates();
    let result = 0;

    if (currency === 'usd') {
        result = amount * rates.usd;
        document.getElementById('result').innerText = `${amount} דולר שווה ${result} ש"ח`;
    } else if (currency === 'eur') {
        result = amount * rates.eur;
        document.getElementById('result').innerText = `${amount} יורו שווה ${result} ש"ח`;
    }
}

function calculateFlights() {
    const destination = document.getElementById('destination').value;
    const passengerCount = document.getElementById('passengerCount').value;

    if (!destination || !passengerCount) {
        alert("נא להזין יעד ומספר נוסעים.");
        return;
    }

    const basePrice = 1000; // מחיר בסיסי
    const totalPrice = basePrice * passengerCount;

    document.getElementById('finalPrice').innerText = `מחיר טיסות ל-${destination} עבור ${passengerCount} נוסעים: ₪${totalPrice}`;
}

function findHotel() {
    const hotelDestination = document.getElementById('hotelDestination').value;

    if (!hotelDestination) {
        alert("נא להזין יעד לחופשה.");
        return;
    }

    const hotelPrices = [
        { name: 'מלון 1', price: 500 },
        { name: 'מלון 2', price: 750 },
        { name: 'מלון 3', price: 1000 }
    ];

    const list = document.getElementById('hotelPrices');
    list.innerHTML = '';
    hotelPrices.forEach(hotel => {
        const listItem = document.createElement('li');
        listItem.textContent = `${hotel.name} - ₪${hotel.price}`;
        list.appendChild(listItem);
    });
}
function openModal() {
    document.getElementById("barcodeModal").style.display = "block";
    document.getElementById("barcodeImg").src = document.getElementById("barcode").src;
}

function closeModal() {
    document.getElementById("barcodeModal").style.display = "none";
}
// פונקציה לפתיחת המודאל
function openModal() {
    document.getElementById("barcodeModal").style.display = "block";
    document.getElementById("barcodeImg").src = document.getElementById("barcode").src;
}

// פונקציה לסגירת המודאל
function closeModal() {
    document.getElementById("barcodeModal").style.display = "none";
}

// סגירה בלחיצה מחוץ לתמונה
window.onclick = function(event) {
    let modal = document.getElementById("barcodeModal");
    if (event.target === modal) {
        closeModal();
    }
}
