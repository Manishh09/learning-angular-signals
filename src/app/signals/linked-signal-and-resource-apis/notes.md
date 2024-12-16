### resource API:

- used to handle api calls using fetch API
- has - loader, error, isLoading on top of response

### rxResource API:

- used to handle the rxjs-signal interop 
- handles api calls using http client
- had - loader, error, isLoading and value on top of response
- value is the response and is of signal type

### linkedSignal:

- When you want to reset the writable signal based another signal, Linked Signal will be used here
- takes and object as an input which contains source, computation

