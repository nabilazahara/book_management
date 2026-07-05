const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Folder static
app.use(express.static(path.join(__dirname, "public")));

// Menggunakan EJS
app.set("view engine", "ejs");

// Data Buku
const books = [
    {
        id: 1,
        title: "Laskar Pelangi",
        author: "Andrea Hirata",
        year: 2005,
        genre: "Novel",
        image: "laskar.jpg",
        description: "Kisah perjuangan sepuluh anak Belitung dalam meraih pendidikan."
    },
    {
        id: 2,
        title: "Bumi",
        author: "Tere Liye",
        year: 2014,
        genre: "Fantasi",
        image: "bumi.jpg",
        description: "Petualangan Raib menuju dunia paralel."
    },
    {
        id: 3,
        title: "Negeri 5 Menara",
        author: "Ahmad Fuadi",
        year: 2009,
        genre: "Inspirasi",
        image: "negeri5.jpg",
        description: "Perjalanan enam sahabat mengejar impian."
    },
    {
        id: 4,
        title: "Dilan 1990",
        author: "Pidi Baiq",
        year: 2014,
        genre: "Romantis",
        image: "dilan.jpg",
        description: "Kisah cinta Dilan dan Milea."
    },
    {
        id: 5,
        title: "Perahu Kertas",
        author: "Dee Lestari",
        year: 2009,
        genre: "Romantis",
        image: "perahu.jpg",
        description: "Perjalanan cinta Kugy dan Keenan."
    },
    {
        id: 6,
        title: "Pulang",
        author: "Tere Liye",
        year: 2015,
        genre: "Fiksi",
        image: "pulang.jpg",
        description: "Perjalanan panjang menemukan makna kehidupan."
    },
    {
        id: 7,
        title: "Ayat-Ayat Cinta",
        author: "Habiburrahman El Shirazy",
        year: 2004,
        genre: "Religi",
        image: "ayat.jpg",
        description: "Novel religi tentang cinta dan kehidupan."
    },
    {
        id: 8,
        title: "5 cm",
        author: "Donny Dhirgantoro",
        year: 2005,
        genre: "Petualangan",
        image: "5cm.jpg",
        description: "Persahabatan dan pendakian ke Mahameru."
    },
    {
        id: 9,
        title: "Atomic Habits",
        author: "James Clear",
        year: 2018,
        genre: "Self Help",
        image: "atomic.jpg",
        description: "Membangun kebiasaan kecil yang membawa perubahan besar."
    },
    {
        id: 10,
        title: "The Psychology of Money",
        author: "Morgan Housel",
        year: 2020,
        genre: "Finance",
        image: "money.jpg",
        description: "Cara berpikir manusia terhadap uang."
    }
];

// Home
app.get("/", (req, res) => {
    res.render("home", {
        totalBooks: books.length
    });
});

// Daftar Buku
app.get("/books", (req, res) => {
    res.render("books", {
        books
    });
});

// Detail Buku
app.get("/books/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const book = books.find(book => book.id === id);

    res.render("detail", {
        book
    });

});

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});