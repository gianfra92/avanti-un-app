# AvantiUnApp

App per la simulazione dei suoni di Avanti Un Altro

## Development server

To start a local development server, run:

```bash
ng serve
```

## Production web
Generazione file di deploy
```bash
ng build --configuration production
```

Ulteriore configurazione per ambienti cloud presente nel Dockerfile preimpostato

## Sviluppo Mobile

Creazione file di produzione mobile
```bash
ng build --configuration mobile
```

Sincronizzazione con Android
```bash
npx cap sync
```
Esecuzione dell'emulatore Android (Android Studio necessario)
```bash
npx cap open Android
```

# Rilascio Mobile

Da Android Studio: 
```
Menu> 
    Build> 
        Generate Signed App Bundle or APK...
```