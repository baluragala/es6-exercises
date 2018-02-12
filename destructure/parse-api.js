let response = {
  menu: {
    id: "file",
    value: "File",
    popup: {
      menuitem: [
        { value: "New", onclick: "CreateNewDoc()" },
        { value: "Open", onclick: "OpenDoc()" },
        { value: "Close", onclick: "CloseDoc()" }
      ]
    }
  }
};

//using object destructuring fetch menuitem key into variable called items
