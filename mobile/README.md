# Gloviéra Mobile Shell

This directory houses the Capacitor configuration that wraps the Gloviéra web experience for Android and iOS.

## Prerequisites

- Node.js 18+
- Java 17 and Android Studio (for Android builds)
- Xcode 15+ (for iOS builds)

## 1. Install Mobile Tooling

```bash
cd mobile
npm install
```

> The install step fetches Capacitor CLI/core, Android, and iOS runtimes. The `postinstall` hook automatically runs `cap sync`.

## 2. Build the Web App & Sync Native Projects

```bash
# from repository root
npm run mobile:sync
```

This runs the web build (`dist/`) and copies fresh assets into the native shells.

## 3. Open Platform Projects

```bash
npm run mobile:android   # opens Android Studio
npm run mobile:ios       # opens Xcode
```

Inside the respective IDEs, finish signing, handle splash/icon assets, and run on devices or emulators.

## Folder Layout (after syncing)

- `mobile/android/` – Android Studio project (created on first sync)
- `mobile/ios/` – Xcode workspace (created on first sync)
- `mobile/node_modules/` – Capacitor tooling dependencies

> Tip: commit the `android/` and `ios/` folders only after they are generated and stable, or add them to `.gitignore` if you prefer to regenerate on each build.

## Firebase configuration

- **Android:** copy the Firebase `google-services.json` you downloaded for the package `com.gloviera.app` into `mobile/android/app/google-services.json` *after* `npm run mobile:sync` creates the Android project. Android Studio will prompt you to resync Gradle.
- **iOS:** place `GoogleService-Info.plist` inside `mobile/ios/App/App/` (drag it into the Xcode project so it is added to the App target). Xcode will regenerate the derived data on the next build.
- **Web:** the existing web Firebase config in `index.html` continues to power the PWA experience. All three shells share the same project backend.

> Whenever you update either Firebase config file, re-run `npm run mobile:sync` so Capacitor copies the latest assets before rebuilding in Android Studio or Xcode.
