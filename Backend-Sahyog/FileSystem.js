const fs = require("fs");

//wirte file

fs.writeFile("studentNote.txt", "This is my first node.js note!", (err) => {
    if (err) {
        console.log("Error while writing: ", err);
        return;
    }

    console.log("1) File created successfully!");

    //read file

    fs.readFile("studentNote.txt", "utf-8", (err, data) => {
        if (err) {
            console.log("Error while reading: ", err);
            return;
        }

        console.log("2) Reading file content:");
        console.log(data);

        //append file

        fs.appendFile(
            "studentNote.txt",
            "\nNew line added: Node.js is easy.",
            (err) => {
                if (err) {
                    console.log("Error while apending: ", err);
                    return;
                }
                console.log("3) Data appended successfully!");
            });
    })
});
