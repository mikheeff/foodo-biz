# biz-nuxt-frontend

Prettier — это средство для форматирования кода, которое нацелено на использование жёстко заданных правил по оформлению программ. Оно форматирует код автоматически.

ESLint  — это вид статического анализа кода, который часто используют для нахождения проблемных паттернов проектирования или кода, который не следует определённым руководствам по стилю.

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


##File structure <br />

.nuxt<br />
Системная директория проекта с компилированными данными.

assets<br />
Директория для файлов участвующих в разработке проекта. 
Именование структуры внутри папок должна быть в точности таким же как в других директориях. 
<br /><br />
scss<br />
<br /><br />
{theme_name}<br />
components (стили компонентов, если они вынесены в файл)<br />
layouts<br />
pages<br />
modules<br />
sections (Основная структура проекта разбита на секции.)<br /><br />

layouts (стили шаблонов)<br />
auth (Страницы авторизации, регистрации и восстановления пароля)<br />
default (Простые информационные и промо страницы)<br />
cabinet (Основной шаблон личного кабинета зарегистрированного пользователя)<br /><br />

pages (стили отдельных страниц)<br />
Папка названия страницы (login) → Внутренние папки и файлы, где название папки равно назван ию страницы, а index.vue - точка входа на страницу. <br /><br />

modules (стили модулей)<br />
Папка модуля по названию модуля → Файлы модуля<br /><br />

variables (Файлы SCSS переменных используемых в теме проекта)<br />
mods (Файлы css классов-модификаторов)<br />
wrapper (Основные компоненты )<br /><br />

components<br />

layouts<br />
auth<br />
default<br />
cabinet<br />


pages<br />
Папка → Index + дочерние страницы<br /><br />


modules<br />
---<br /><br />


sections<br />
ContentSection<br />
LeftSidebarSection<br />
RightSidebarSection<br /><br />


components<br />
Inputs<br />
Images<br />
Selects<br />
Buttons<br />
Forms<br />
Pagination<br />
Sidebar<br />
Users<br />
…<br /><br />


data<br />
StaticDataCenter<br /><br />


content<br />
---<br /><br />

dist<br />
Системная директория проекта с компилированными данными.<br /><br />

lang<br />
Файлы локализации.<br />
Именование файлов локализации имеет вид символьного пода страны в формате en-US.js<br />

en-US.js<br />

ru-RU.js<br /><br />

layouts<br />
auth<br />
default<br />
cabinet<br />

Managers (Mixins)<br /><br />

middleware<br />
---<br /><br />

pages<br />
Папка названия страницы (login) → Внутренние папки и файлы, где название папки равно назван ию страницы, а index.vue - точка входа на страницу. <br /><br />

plugins<br />
Файлы плагинов проекта<br /><br />

static <br />
Статичные  файлы проекта<br /><br />

icons<br />
images<br />

store (Vuex модули)<br />
Файл vuex модуля<br /><br />

test (Автотесты)<br />
---<br />
