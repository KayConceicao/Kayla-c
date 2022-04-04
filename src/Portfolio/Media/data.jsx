import { v4 as uuidv4} from "uuid";

function musicList() {
    return [
        {
            name: "Kinsfolk",
            cover: "https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg",
            artist: "Aarigod",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=12996",
            id: uuidv4(),
            color: ["#9ABA63", "#627847"],
            active: true,
        },
        {
            name: "Woodnote",
            cover: "https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg",
            artist: "Aarigod, imagiro",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=13011",
            id: uuidv4(),
            color: ["#9ABA63", "#627847"],
            active: false,
        },
        {
            name: "Golden",
            cover: "https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg",
            artist: "Aarigod",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=13005",
            id: uuidv4(),
            color: ["#9ABA63", "#627847"],
            active: false,
        },
        {
            name: "Splendour",
            cover: "https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg",
            artist: "Aarigod",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=13013",
            id: uuidv4(),
            color: ["#9ABA63", "#627847"],
            active: false,
        },
        {
            name: "Evenfall",
            cover: "https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg",
            artist: "Aarigod",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=13007",
            id: uuidv4(),
            color: ["#9ABA63", "#627847"],
            active: false,
        },
    ];
};

export default musicList;