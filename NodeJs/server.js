const fs = require("fs");
//------------------------------------------------------Make directory-------------------------------------------
// fs.mkdir("./folder", { recursive: true })
//   .then(() => {
//     console.log("folder created");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// //------------------------------------------------------Remove directory-------------------------------------------

// fs.rmdir("./folder", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("folder deleted");
//   }
// });

// //------------------------------------------------------Rename directory-------------------------------------------

// fs.rename("./folder", "./folder2", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("folder renamed");
//   }
// })

// //------------------------------------------------------write in File-------------------------------------------

// fs.writeFile("./folder2/file.txt", "hello world", (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("file created");
//     }
// })

// //------------------------------------------------------Append file-------------------------------------------
// fs.appendFile("./folder2/file.txt", "hello world", (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("file created");
//     }
// })
// //------------------------------------------------------Read file-------------------------------------------
// fs.readFile("./folder2/file.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// })
// //------------------------------------------------------Delete file-------------------------------------------
// fs.unlink("./folder2/file.txt", (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("file deleted");
//     }
// })

// //------------------------------------------------------Rename file-------------------------------------------
// fs.rename("./folder2/file.txt", "./folder2/file1.txt", (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("file renamed");
//     }
// })
// //------------------------------------------------------remove file-------------------------------------------
// fs.rm("./folder2/file1.txt",{ recursive: true ,force:true}, (err) => {
//     if (err) {
//         console.log(err);

//     }else console.log("file deleted");

// })

// // ------------------------------------------------------copy file-------------------------------------------
// fs.copyFile("./folder2/file.txt", "./folder2/file2.txt", (err) => {
//     if (err) {
//         console.log(err);

//     }else console.log("file copied");
// })

// // ------------------------------------------------------access file-------------------------------------------
// fs.access("./folder2/file2.txt",constants.F_W_OK, (err) => {
//     if (err) {
//         console.log(err);
//     }else console.log("file access");
// })
// //------------------------------------------------------Read directory-------------------------------------------
// fs.readdir("./node_modules", (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data); //print all files in the folder
//     }
// })
//------------------------------------------------------Create list of files-------------------------------------------
// async function listFiles() {
//   const files = await fs.promises.readdir("./node_modules");
// //   console.log(files);
//   fs.writeFile("./folder/file.json", JSON.stringify(files), (err) => {});
//   fs.readFile("./folder/file.json", "utf-8", (err, data) => {
//       const files = JSON.parse(data);
//       files.forEach(element => {
//         console.log(element);

//       });
//   })
// }
// listFiles();

//task
//function create ,edit array,delete,write
Products = [
  {
    id: 1,
    name: "laptop",
    price: 1000,
  },
  {
    id: 2,
    name: "mobile",
    price: 2000,
  },
];
async function listProducts() {
  fs.writeFile("./folder/file.json", JSON.stringify(Products), (err) => {
    if (err) {
      console.log(err);
    }
  });
  fs.readFile("./folder/file.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const files = JSON.parse(data);
      files.forEach((element) => {
        console.log(element);
      });
    }
  });
}
listProducts();
