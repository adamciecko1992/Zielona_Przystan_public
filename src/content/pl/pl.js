import {
    photosObj
} from "../../assets/photosUrls";

const pl = {
    home: {
        header: "Zielona Przystań",
        subheader: "Cichy zakątek w sercu miasta",
        moreButton: "Więcej",
        cards: {
            about: {
                header: "O obiekcie",
                content: "Zapoznaj się z naszym obiektem, poznaj jego cechy i wyposażenie",
                link: "O obiekcie",
                url: photosObj.roundedHero,
                alt: "tło",
            },
            entry: {
                header: "Jak wejść do lokalu",
                content: "Dowiedz się jak dostać się do lokalu.",
                link: "Wejście do lokalu",
                url: photosObj.roundedDoors,
                alt: "drzwi",
            },
            location: {
                header: "Gdzie nas znaleźć",
                content: "Zobacz gdzie dokładnie znajduje się nasz lokal, oraz gdzie możesz swobodnie pozostawić swój pojazd",
                link: "Lokalizacja",
                url: photosObj.roundedParking,
                alt: "parking",
            },
            gallery: {
                header: "Galeria",
                content: "Obejrzyj nasze wyjątkowe wnętrze",
                link: "Galeria",
                url: photosObj.roundedPainting,
                alt: "obraz",
            },
            contact: {
                header: "Kontakt",
                content: "Masz pytania ? Napisz do nas !",
                link: "Kontakt",
                url: photosObj.roundedContact,
                alt: "telefon",
            },
            // atractions: {
            //     header: "Pobliskie atrakcje",
            //     content: "Zobacz ciekawe miejsca w pobliżu naszego apartamentu",
            //     link: "Atrakcje",
            //     url: photosObj.roundedPiotrkowska,
            //     alt: "Piotrkowska",
            // },
            reservation: {
                header: "Rezerwacja",
                content: "Nie zarezerwowałeś jeszcze naszego obiektu? Zrób to teraz!",
                link: "Rezerwacja",
                url: photosObj.roundedBooking,
                alt: "Booking",
            },
        },
    },
    about: {
        header: "O obiekcie",
        subheader: "Poznaj nasze wnętrze",
        paragraph: "Zielona przystań to piękny apartament położony w samym sercu miasta. Cechuje go nietuzinkowe artystyczne wnętrze, oraz przytulny nastrój",
        cards: [{
                header: "Apartament położony w sercu miasta",
                content: "Nasz lokal położony jest przy ul. Piotrkowskiej w najbardziej reprezentacynym miejscu Łodzi.",
                icon: "City",
            },
            {
                header: "Wygodny system rezerwacji",
                content: "Nasz lokal nie posiada recepcji. Wszelkie niezbędne informacje aby móc z  korzystać z lokalu otrzymają Państwo w wiadomości SMS. Więcej w sekcji 'Jak wejść do lokalu'",
                icon: "Key",
            },
            {
                header: "Miejsce nawet dla czterech osób.",
                content: "W apartamencie mogą się bez problemu pomieścić cztery osoby. Każdy będzie miał część przestrzeni dla siebie.",
                icon: "Users",
            },
            {
                header: "Łatwo dostępne miejsca parkingowe",
                content: "Nasz lokal otoczony jest parkingami, na których można pozostawić swój pojazd. Więcej w sekcji 'Gdzie nas znaleźć'",
                icon: "Parking",
            },
            {
                header: "Pełne wyposażenie.",
                content: "Lokal ma w pełni wyposażoną kuchnię, w dodatku dla gości przyszykowane są ręczniki i pościel.",
                icon: "Utensils",
            },
            {
                header: "Ciche, artystyczne wnętrze",
                content: "Pomimo swojej lokalizacji w naszym apartamencie panuje cisza. Brama jest zamykana na noc a na podwórku panuje spokój.",
                icon: "Moon",
            },
        ],
    },
    entry: {
        header: "Jak wejść do naszego lokalu",
        steps: {
            message: {
                url: photosObj.roundedContact,
                content: "Po rezerwacji lokalu na twój numer telefonu otrzymasz <b class='text-success'>kod do wejscia do bramy oraz skrzynki z kluczem</b>",
            },
            yardEntry: {
                url: photosObj.roundedPiotrkowska,
                content: "Aby wejść do bramy wprowadz przesłany <b class='text-success'> kod na panelu domofonu po lewej stronie</b>",
            },
            findDoors: {
                url: photosObj.roundedDoors,
                content: "Wejście do lokalu znajduje się <b class='text-success'>po prawej stronie wewnątrz podwórka.</b>",
            },
            takeOutKey: {
                url: photosObj.roundedLock,
                content: "Wprowadź otrzymany kod w <b class='text-success'>skrzyneczce po prawej stronie drzwi</b> po czym wyjmij z niej <b class='text-success'>klucz</b> do lokalu.",
            },
            openTheDoor: {
                url: photosObj.roundedDoorKnob,
                content: "Przekręć klucz w zamku jednocześnie <b class='text-success'>ciągnąc drzwi do siebie.</b>",
            },
            welcome: {
                url: photosObj.roundedInterior,
                content: "<b class='text-success'>Od tego momentu możesz korzystać do woli z naszego apartamentu</b>, oraz opuszczać go i wracać do niego według uznania. <b class='text-danger'> Zatrzaśnięcie kluczy w środku poskutkuje brakiem możliwości wejścia do lokalu!!!</b>",
            },
        },
    },
    location: {
        header: "Lokalizacja",
        subheader: "Tutaj znajdziecie państwo lokacje naszego obiektu jak i otaczających go parkingów.",
        controls: {
            home: "Zielona Przystań",
            parking1: "Parking 1",
            parking2: "Parking 2"
        },
        points: {
            home: "To tutaj mieści się nasz obiekt. Adres Piotrkowska 59, wejście przez bramę, drzwi do obiektu znajdują się w prawej oficynie.",
            parking1: "Parking bezpłatny! Znajduje się na tyłach budynkuj TVP Łódź. Wjazd na parking od ulicy Sienkiewicza.",
            parking2: "Parking płatny przy ulicy Narutowicza. Położony niemal bezpośrednio ze skrzyżowaniem z ulicą Piotrkowską.",
        },
    },
    contact: {
        header: "Kontakt",
        subheader: "Nie znalazłeś odpowiedzi na swoje pytania na naszej stronie? Skontaktuj się z nami!",
        info: {
            name: "Zielona Przystań",
            street: "Piotrkowska 59, 90-001 Łódź",
            email: "hanna.ciecko@gmail.com",
            phoneNumber: "tel. 531-065-117"
        },
        form: {
            name: "Imię",
            namePlaceholder: "Wprowadź swoje imię",
            email: "Email",
            emailPlaceholder: "Twój email",
            textareaPlaceholder: "Treść zapytania",
            errorMessages: {
                email: "Proszę wprowadzić poprawny adres email<br/>",
                name: "Proszę wprowadzić poprawne imię<br/>",
                harmfullSymbols: "Tekst zawiera niedozwolone znaki specjalne np $ % ^ < > itd. lub jest zbyt krótka<br/>",
            }

        }
    },
    gallery: {
        header: "Galeria",
        subheader: "Odkryj nasze wnętrze"
    },
    footer: {
        title: "Zielona Przystań",
        author: "&copy; Adam Ciećko"
    }

};

export default pl;