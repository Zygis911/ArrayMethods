
let books = [
    {
        pavadinimas: "Smarkuolė Gilė Hopkins",
        puslapiai: 60
    },
    {
        pavadinimas: "Alisa Stebuklų šalyje",
        puslapiai: 192
    },
    {
        pavadinimas: "Jurgelis miškauja",
        puslapiai: 112
    },
    {
        pavadinimas: "Paslaptingas drakonas",
        puslapiai: 102
    },
    {
        pavadinimas: "Penktoji šlepetė plius",
        puslapiai: 200
    }
]

// Sukurti funkcijas:
// 1. printBook(book) - atspausdina vienos knygos duomenis;

function printBook(obj) {
    const randomIndex = Math.floor(Math.random() * obj.length);
    const item = obj[randomIndex];
    return item;
} // nesigauna pritaikyti kodo kad grazintu viena random knyga,
// tai palieku koda antram variantui nes jis tinka pirmam irasius [...index];

// 2. printAllBooks(arr) - atspausdina visas knygas;
function printBook(obj) {
    for (let key in obj) {
        console.log(obj[key])
    }
}
printBook(books)
// 3. getBooksCount(arr) - grąžina perskaitytų knygų skaičių;

function readBooks(obj) {
    return obj.length;
}

// 4. getTotalNumberOfPages(arr) - grąžina perskaitytų knygų puslapių skaičių;
function getTotalNumberOfPages(obj) | {
    return obj.reduce((sum, book) => sum + book.puslapiai, 0);
}

// 5. getMaxPages(arr) - grąžina knygą, kuri turi daugiausiai puslapių;

function getMaxPages(obj) {
    let max = obj[0];
    for (let i = 1; i < obj.length; i++) {
        if (obj[i].puslapiai > max.puslapiai) {
            max = obj[i];
        }
    }
    return max.pavadinimas;
}
// 6. getAvgNumberOfPages(arr) - grąžina perskaitytų knygų puslapių vidurkį.

function getAvgNumberOfPages(obj)
 { let pages = getTotalNumberOfPages(obj); return pages / obj.length; }
