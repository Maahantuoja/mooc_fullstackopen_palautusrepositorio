# Osan 0 tehtävien vastaukset

## 0.4: uusi muistiinpano

```mermaid
sequenceDiagram
    participant browser
    participant server
    
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server

    Note right of browser: The browser sends a POST request with the new note data in JSON format: { "content": "New note" }.

    server-->>browser: HTTP 302 Found, Location: /notes
    deactivate server

    Note left of server: The server responds with HTTP 302 Found, instructing the browser to redirect to the /notes page.

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server

    Note right of browser: The browser follows the redirect and requests the updated /notes page.

    server-->>browser: HTML document
    deactivate server

    Note left of server: The server responds with an HTML document defining the page structure.

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server

    Note right of browser: The browser requests the CSS file (main.css) to apply styles.

    server-->>browser: CSS file
    deactivate server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server

    Note right of browser: The browser requests the JavaScript file (main.js) that controls the page’s functionality.

    server-->>browser: JavaScript file
    deactivate server
    
    Note right of browser: The browser executes the JavaScript code, which requests note data from the server.

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: JSON response [{ "content": "New note", "date": "2025-03-04T07:56:09.488Z" }, ... ]
    deactivate server    

    Note right of browser: The browser updates the page by rendering the notes.
```

## 0.5: Single Page App

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server

    Note right of browser: The browser requests the SPA version of the notes application.

    server-->>browser: HTML document
    deactivate server

    Note left of server: The server responds with an HTML document containing only the basic structure.

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server

    Note right of browser: The browser requests the CSS file (main.css) to apply styles.

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

    Note right of browser: The browser dynamically renders the notes without reloading the page.
```

## 0.6: Uusi muistiinpano

```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: The user types a new note and clicks the save button.

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server

    Note right of browser: The browser sends a POST request with the new note data in JSON format: { "content": "New note", "date": "2025-03-04T16:22:26.082Z" }.

    server-->>browser: HTTP 201 Created
    deactivate server

    Note left of server: The server responds with HTTP 201 Created, confirming the note has been saved.

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server

    Note right of browser: The browser fetches the updated list of notes from the server.

    server-->>browser: JSON response [{ "content": "New note", "date": "2025-03-04T16:22:26.082Z" }, ... ]
    deactivate server    

    Note right of browser: The browser updates the UI dynamically, displaying the new note without reloading the page.
```
