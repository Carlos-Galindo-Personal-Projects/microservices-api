<h1>Microservicios - API Gateway</h1>

<h2>Proyecto para practicar la implementación de microservicios con una API Gateway que redirige las peticiones a dos microservicios (uno de autenticación y otro de productos y sus categorías)</h2>

<h2>Tecnologías utilizadas</h2>

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=ts,nodejs,npm,express,tailwind,next,postgres,prisma&perline=12" />
  </a>
</p>

<h2>Arquitectura del sistema</h2>
<img src="./architecture.svg" alt="Architecture Diagram" />

<h2>Pasos para ejecutar el proyecto</h2>

<h3>Clonar el repositorio</h3>

      git clone https://github.com/Carlos-Galindo-Personal-Projects/microservices-api.git
<h3>Navegar a api-users, instalar las dependencias, crear un archivo .env, ejecutar las migraciones, transpilar el proyecto y ejecutarlo</h3>

<p>Ir al directorio <code>api-users/</code>:</p>
<pre><code>cd api-users/</code></pre>

<p>Instalar las dependencias:</p>
<pre><code>npm i</code></pre>

<p>Crear un archivo <code>.env</code>:</p>
<pre><code>touch .env</code></pre>

<p>Agregar las siguientes variables al archivo <code>.env</code>:</p>
<pre><code>
PORT=3001
JWT_SECRET="SUPER_SECRET_KEY"
API_GATEWAY_URL="http://localhost:3000"
DATABASE_URL="postgresql://POSTGRES_USER:POSTGRES_PASSWORD@localhost:POSTGRES_PORT/POSTGRES_USERS_DATABASE_NAME?schema=public"
</code></pre>

<p>Ejecutar las migraciones:</p>
<pre><code>npx prisma migrate dev --name add-default</code></pre>

<p>Transpilar el proyecto:</p>
<pre><code>npm run build</code></pre>

<p>Iniciar el proyecto:</p>
<pre><code>npm start</code></pre>
  
<h3>Navegar a api-products, instalar las dependencias, crear un archivo .env, ejecutar las migraciones, transpilar el proyecto y ejecutarlo</h3>

<p>Ir al directorio <code>api-products/</code>:</p>
<pre><code>cd ../api-products/</code></pre>

<p>Instalar las dependencias:</p>
<pre><code>npm i</code></pre>

<p>Crear un archivo <code>.env</code>:</p>
<pre><code>touch .env</code></pre>

<p>Agregar las siguientes variables al archivo <code>.env</code>:</p>
<pre><code>
PORT=3002
API_GATEWAY_URL="http://localhost:3000"
DATABASE_URL="postgresql://POSTGRES_USER:POSTGRES_PASSWORD@localhost:POSTGRES_PORT/POSTGRES_USERS_DATABASE_PRODUCTS?schema=public"
</code></pre>

<p>Ejecutar las migraciones:</p>
<pre><code>npx prisma migrate dev --name add-default</code></pre>

<p>Transpilar el proyecto:</p>
<pre><code>npm run build</code></pre>

<p>Iniciar el proyecto:</p>
<pre><code>npm start</code></pre>

<h3>Navegar a api-gateway, instalar las dependencias, crear un archivo .env, ejecutar las migraciones, transpilar el proyecto y ejecutarlo</h3>

<p>Ir al directorio <code>api-gateway/</code>:</p>
<pre><code>cd ../api-gateway/</code></pre>

<p>Instalar las dependencias:</p>
<pre><code>npm i</code></pre>

<p>Crear un archivo <code>.env</code>:</p>
<pre><code>touch .env</code></pre>

<p>Agregar las siguientes variables al archivo <code>.env</code>:</p>
<pre><code>
JWT_SECRET="SUPER_SECRET_KEY"
FRONTEND_URL="http://localhost:3003"
</code></pre>

<p>Ejecutar las migraciones:</p>
<pre><code>npx prisma migrate dev --name add-default</code></pre>

<p>Transpilar el proyecto:</p>
<pre><code>npm run build</code></pre>

<p>Iniciar el proyecto:</p>
<pre><code>npm start</code></pre>

<h3> Ahora puedes hacer peticiones a http://localhost:3000 y esta redirige las peticiones a http://localhost:3001 y http://localhost:3002  </h3>
