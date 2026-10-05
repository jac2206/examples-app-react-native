# 🎁 Examples App

## 🚀 React Native + Expo + TypeScript + React Navigation + Axios + Hooks

Aplicación educativa de ejemplos desarrollada con React Native, Expo y TypeScript.
El proyecto reúne ejemplos sencillos de navegación, componentes reutilizables y
consumo de APIs públicas con Axios.

La aplicación permite:

- 🔐 Iniciar sesión con una validación local sencilla.
- 🏠 Navegar desde una pantalla principal de funcionalidades.
- 👤 Consultar perfiles de ejemplo.
- ⚡ Buscar información básica de Pokémon desde PokeAPI.
- 🛍️ Consultar productos desde DummyJSON.
- ✏️ Crear y actualizar productos usando `POST` y `PUT`.
- 🔌 Comparar consumo directo con Axios frente a un cliente con interceptores.

---

## 🧠 1. Tecnologías

El proyecto utiliza:

- React Native `0.86`
- Expo `57`
- TypeScript
- React Navigation Native Stack
- Axios
- Expo Vector Icons
- Biome para formato y validación de código

---

## 🏗️ 2. Arquitectura de la aplicación

El proyecto separa la interfaz, la lógica reutilizable, los servicios HTTP y los
tipos de datos.

```text
                         App.tsx
                            ↓
                       AppNavigator
                            ↓
                          Screens
                            ↓
                          Hooks
                            ↓
                         Services
                            ↓
                          Axios
                            ↓
                 PokeAPI / DummyJSON / Backend
```

### 📌 Regla principal

Las pantallas se encargan principalmente de renderizar la interfaz y reaccionar
a las acciones del usuario. La lógica de consumo de APIs vive en hooks y
services.

```text
Screen
   ↓
Hook
   ↓
Service
   ↓
Axios
   ↓
API
```

---

## 📂 3. Estructura del proyecto

```text
src
├── components
│   ├── CustomInputField.tsx
│   └── ProfileCard.tsx
│
├── hooks
│   ├── usePokemon.ts
│   ├── useProducts.ts
│   └── useProductEditor.ts
│
├── navigation
│   └── AppNavigator.tsx
│
├── screens
│   ├── AxiosDemoScreen.tsx
│   ├── ExampleScreen.tsx
│   ├── FirstScreen.tsx
│   ├── HomeScreen.tsx
│   ├── LoginScreen.tsx
│   ├── PokemonScreen.tsx
│   ├── ProductEditorScreen.tsx
│   ├── ProductsScreen.tsx
│   └── ProfileScreen.tsx
│
├── services
│   ├── api.ts
│   ├── pokemonService.ts
│   ├── productsService.ts
│   └── transactionService.ts
│
├── styles
│   ├── ApiScreen.styles.ts
│   ├── HomeScreen.styles.ts
│   ├── LoginScreen.styles.ts
│   ├── ProfileScreen.styles.ts
│   └── colors.ts
│
└── types
    ├── components.ts
    ├── navigation.ts
    ├── pokemon.ts
    ├── products.ts
    └── transaction.ts
```

---

## 🧩 4. Responsabilidad de las carpetas

### 📱 `screens`

Contiene las pantallas de la aplicación. Las screens muestran la interfaz,
consumen hooks y coordinan la navegación.

### 🪝 `hooks`

Contiene lógica reutilizable relacionada con el estado y las solicitudes.

```text
usePokemon
   ├── pokemon
   ├── loading
   ├── error
   └── search

useProducts
   ├── products
   ├── loading
   ├── error
   └── reload

useProductEditor
   ├── form
   ├── loading
   ├── saving
   ├── updateField
   └── save
```

### 🌐 `services`

Contiene únicamente las llamadas HTTP y la configuración de Axios.

- `pokemonService.ts`: obtiene un Pokémon desde PokeAPI.
- `productsService.ts`: lista, consulta, crea y actualiza productos.
- `api.ts`: cliente Axios con interceptores.
- `transactionService.ts`: ejemplo de servicios de acumular y redimir.

### 🧾 `types`

Contiene las interfaces y tipos reutilizables de la aplicación. Los modelos no
se definen dentro de los services para que puedan compartirse entre hooks,
services y pantallas.

### 🎨 `styles`

Contiene colores y estilos separados por pantalla para mantener una apariencia
consistente.

---

## 🔌 5. Consumo de APIs

### PokeAPI

La pantalla `PokemonScreen` utiliza:

```text
GET https://pokeapi.co/api/v2/pokemon/{name}
```

Permite consultar:

- Nombre.
- Imagen principal.
- ID.
- Altura.
- Peso.
- Tipos.

### DummyJSON

La pantalla `ProductsScreen` utiliza:

```text
GET  https://dummyjson.com/products?limit=20
GET  https://dummyjson.com/products/{id}
POST https://dummyjson.com/products/add
PUT  https://dummyjson.com/products/{id}
```

DummyJSON simula las operaciones de creación y actualización. Las respuestas
son válidas para practicar el flujo, pero los cambios no se persisten
realmente en el servidor.

---

## 🔁 6. Axios directo e interceptores

Las APIs públicas utilizan Axios directamente dentro de sus services:

```ts
const response = await axios.get<Product[]>(url);
return response.data;
```

Para un backend propio se utiliza el cliente centralizado de `src/services/api.ts`:

```ts
export const api = axios.create({
  baseURL: "https://tu-api.com",
  timeout: 10000,
});
```

El cliente tiene interceptores para centralizar acciones como:

- Agregar tokens de autenticación.
- Registrar solicitudes.
- Manejar errores de respuesta.
- Configurar headers y timeout.

Antes de usar las transacciones, reemplaza `https://tu-api.com` por la URL real
del backend.

---

## 🧮 7. Ejemplo de transacciones

El archivo `transactionService.ts` contiene dos funciones de ejemplo:

```ts
export async function accumulateRequest(data: Transaction) {
  const response = await api.post("/transactions/accumulate", data);
  return response.data;
}

export async function redeemRequest(data: Transaction) {
  const response = await api.post("/transactions/redeem", data);
  return response.data;
}
```

Estas funciones usan el cliente `api`, por lo que pasan por los interceptores.

---

## ⚙️ 8. Requisitos

Antes de ejecutar el proyecto necesitas:

- Node.js LTS.
- NPM.
- Expo Go para probarlo en un dispositivo físico, o un emulador Android/iOS.

Verifica las versiones instaladas:

```bash
node -v
npm -v
```

---

## 📦 9. Instalación

Clona el repositorio y entra a la carpeta:

```bash
git clone <URL_DEL_REPOSITORIO>
cd examples-app
```

Instala las dependencias:

```bash
npm install
```

---

## 📱 10. Ejecutar la aplicación

Inicia Expo:

```bash
npm start
```

También puedes ejecutar directamente:

```bash
npm run android
npm run ios
npm run web
```

Para probarlo en un dispositivo físico, escanea el código QR desde Expo Go.

---

## 🧭 11. Navegación

La navegación está definida en `src/navigation/AppNavigator.tsx`.

```text
Login
  ↓
Home
  ├── Profile
  ├── Pokemon
  ├── Products
  │     └── ProductEditor
  └── AxiosDemo
```

La sesión actual es educativa y local: el Login valida que el correo y la
contraseña no estén vacíos antes de navegar a Home.

---

## 🧪 12. Estados de las solicitudes

Los hooks manejan los estados principales de una llamada HTTP:

```text
Solicitud
    ↓
 Loading
    ↓
 ┌─────────────┐
 ↓             ↓
Éxito         Error
 ↓             ↓
Data       Mensaje
```

Esto permite mostrar indicadores de carga, resultados y mensajes de error sin
mezclar toda la lógica dentro de las pantallas.

---

## 🧹 13. Formato y calidad de código

El proyecto utiliza Biome.

Formatear archivos:

```bash
npm run format
```

Validar formato y reglas:

```bash
npm run check
```

Validar TypeScript:

```bash
npx tsc --noEmit
```

---

## ✅ 14. Buenas prácticas aplicadas

- Mantener las pantallas enfocadas en la interfaz.
- Usar hooks para lógica reutilizable.
- Mantener las llamadas HTTP dentro de `services`.
- Definir interfaces compartidas dentro de `types`.
- Separar estilos de las pantallas.
- Centralizar colores en `styles/colors.ts`.
- Manejar estados de `loading`, `error` y `data`.
- Usar un cliente Axios con interceptores para el backend propio.
- Mantener la navegación separada de las pantallas.

---

## 🧪 15. Flujo recomendado de desarrollo

```text
1. npm install
       ↓
2. npm start
       ↓
3. Crear o modificar la funcionalidad
       ↓
4. Separar lógica en hooks y services
       ↓
5. Ejecutar npm run format
       ↓
6. Ejecutar npm run check
       ↓
7. Ejecutar npx tsc --noEmit
       ↓
8. Probar en Expo Go o emulador
```

---

## 📋 16. Comandos principales

| Comando | Función |
| --- | --- |
| `npm install` | Instalar dependencias |
| `npm start` | Iniciar Expo |
| `npm run android` | Ejecutar en Android |
| `npm run ios` | Ejecutar en iOS |
| `npm run web` | Ejecutar en navegador |
| `npm run format` | Formatear con Biome |
| `npm run check` | Validar con Biome |
| `npx tsc --noEmit` | Validar TypeScript |
| `npx expo start --clear` | Iniciar Expo limpiando caché |

---

## 🎯 Conclusión

Examples App es un proyecto de práctica para aprender React Native con una
estructura clara y progresiva:

```text
Screens       → Interfaz
Hooks         → Estado y lógica reutilizable
Services      → Comunicación HTTP
Types         → Contratos de datos
Styles        → Apariencia visual
Navigation    → Flujo entre pantallas
Axios         → Consumo de APIs
```

El objetivo es que cada responsabilidad tenga un lugar claro y que el proyecto
pueda crecer sin concentrar toda la lógica en los componentes visuales.
