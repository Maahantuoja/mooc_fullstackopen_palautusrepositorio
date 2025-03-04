# Osan 0 tehtävien vastaukset

## 0.4: uusi muistiinpano

```mermaid
sequenceDiagram
    participant browser
    participant server
    
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note"
    activate server

    Note right of browser: The browser makes a POST request to the server. The request contains the details of the new note, e.g. {"note": "New note"}.

    server-->>browser: Response: HTTP 302, Location: /notes, redirect to GET https://studies.cs.helsinki.fi/exampleapp/notes
    deactivate server

    Note left of server: The server returns HTTP status code 302, instructing the browser to automatically send a new GET request to the URL in the Location header.

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server

    Note right of browser: The browser refreshes the /notes page by sending a GET request.

    server-->>browser: HTML document
    deactivate server

    Note left of server: The server responds with an HTML document that defines the structure of the page.

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server

    Note right of browser: The browser requests a CSS file (main.css) to display the page layout correctly.

    server-->>browser: the css file
    deactivate server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server

    Note right of browser: The browser requests a JavaScript file (main.js) that is responsible for the functionality of the page.

    server-->>browser: the JavaScript file
    deactivate server
    
    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "New note", date: "2025-03-04T07:56:09.488Z" }, ... ]
    deactivate server    

    Note right of browser: The browser executes the callback function that renders the notes 
```

## 0.5: Single Page App

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server

    Note right of browser: The browser makes an GET request to the server to retrieve the HTML code of the page.

    server-->>browser: HTML document
    deactivate server

    Note left of server: The server responds with an HTML document that defines the structure of the page.

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server

    Note right of browser: The browser requests a CSS file (main.css) to display the page layout correctly.

    server-->>browser: CSS file
    deactivate server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server

    Note right of browser: The browser requests the JavaScript file (spa.js), which handles the application logic.

    server-->>browser: JavaScript file
    deactivate server

    Note right of browser: The browser executes the JavaScript code, which fetches note data from the server asynchronously.

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server

    Note right of browser: The JavaScript code sends a request to fetch all notes in JSON format.

    server-->>browser: JSON response [{ "content": "example note", "date": "2024-03-06T12:00:00.123Z" }, ... ]
    deactivate server    

    Note right of browser: The browser processes the JSON response and dynamically renders the notes on the page without reloading.
```

## 0.6: Uusi muistiinpano

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server

    Note right of browser: The browser sends a POST request to the server with the new note data in JSON format [{content: "New note", date: "2025-03-04T16:22:26.082Z"}].

    server-->>browser: HTTP 201 Created
    deactivate server

    Note left of server: The server responds with HTTP 201 Created, indicating the note has been saved.

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server

    Note right of browser: The browser fetches the updated list of notes from the server.

    server-->>browser: JSON response [{ "content": "New note", "date": "2024-03-06T12:00:00.123Z" }, ... ]
    deactivate server    

    Note right of browser: The browser updates the UI dynamically, displaying the new note without reloading the page.
```
