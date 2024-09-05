
# Build / Release apk or aab

## Assemble the release apk
Use following command to release apk

```

# build required resources that not in version control
yarn prebuild

cd android

# In Windows
gradlew.bat clean assembleRelease
# In iOS
./gradlew clean assembleRelease
```
The apk is located at `.\android\app\build\outputs\apk\release\app-release.apk`

## Buindle the release aab
Use following command to release aab in `.\android\app\build\outputs\bundle\release\app-release.aab`

```
cd android

# In Windows
gradlew.bat bundleRelease
# In iOS
./gradlew bundleRelease

```