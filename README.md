# biz-nuxt-frontend

Prettier — это средство для форматирования кода, которое нацелено на использование жёстко заданных правил по оформлению программ. Оно форматирует код автоматически.

ESLint  — это вид статического анализа кода, который часто используют для нахождения проблемных паттернов проектирования или кода, который не следует определённым руководствам по стилю.

StyleLint 

Jest - testing frameworks 

Node.js

Vuetify


## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).


File structure
Создано: Евгений
Последнее обновление: янв. 15, 2021
.nuxt
Системная директория проекта с компилированными данными.

assets
Директория для файлов участвующих в разработке проекта. 
Именование структуры внутри папок должна быть в точности таким же как в других директориях. 

scss

{theme_name}
components (стили компонентов, если они вынесены в файл)
layouts
pages
modules
sections (Основная структура проекта разбита на секции.)

layouts (стили шаблонов)
auth (Страницы авторизации, регистрации и восстановления пароля)
default (Простые информационные и промо страницы)
cabinet (Основной шаблон личного кабинета зарегистрированного пользователя)

pages (стили отдельных страниц)
Папка названия страницы (login) → Внутренние папки и файлы, где название папки равно назван ию страницы, а index.vue - точка входа на страницу. 

modules (стили модулей)
Папка модуля по названию модуля → Файлы модуля

variables (Файлы SCSS переменных используемых в теме проекта)
mods (Файлы css классов-модификаторов)
wrapper (Основные компоненты )

components

layouts
auth
default
cabinet


pages
Папка → Index + дочерние страницы


modules
---


sections
ContentSection
LeftSidebarSection
RightSidebarSection


components
Inputs
Images
Selects
Buttons
Forms
Pagination
Sidebar
Users
…


data
StaticDataCenter


content
---

dist
Системная директория проекта с компилированными данными.

lang
Файлы локализации.
Именование файлов локализации имеет вид символьного пода страны в формате en-US.js

en-US.js

ru-RU.js

layouts
auth
default
cabinet

Managers (Mixins)

middleware
---

pages
Папка названия страницы (login) → Внутренние папки и файлы, где название папки равно назван ию страницы, а index.vue - точка входа на страницу. 

plugins
Файлы плагинов проекта

static 
Статичные  файлы проекта

icons
images

store (Vuex модули)
Файл vuex модуля

test (Автотесты)
---