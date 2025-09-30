# Ticketing Platform — Microservices-Based E-Commerce System

A **scalable**, **cloud-native** ticketing and e-commerce system built with a **production-ready microservices architecture**.  
This platform uses **event-driven design**, **secure authentication**, and **CI/CD workflows** - all running in a fully containerized **Kubernetes** environment.  
It demonstrates how real-world systems are structured using **microservices**, **asynchronous communication**, and modern DevOps practices.

---

## 🛠️ Tech Stack

| Area        | Tech                          |
| ----------- | ----------------------------- |
| Frontend    | React, Next.js, TypeScript    |
| Backend     | Node.js, Express, TypeScript  |
| Messaging   | NATS Streaming                |
| Databases   | MongoDB, Redis                |
| Auth        | JSON Web Tokens (JWT)         |
| Infra       | Docker, Kubernetes, Skaffold  |
| Shared Code | Custom NPM Package (`common`) |
| Testing     | Jest, Supertest               |

---

## 🏗️ Architecture

- 🌐 **Frontend**: SSR React app built with **Next.js**, optimized for SEO and performance.
- ⚙️ **Microservices**: Each domain (auth, tickets, orders, payments, etc.) is a standalone **Node.js + Express** service.
- 📡 **Event Bus**: High-speed, real-time communication via **NATS Streaming** using publish/subscribe architecture.
- 📦 **Shared Code**: Reusable logic and TypeScript types extracted into a custom **NPM package** (`@michaelil/common`).
- 🔐 **Authentication**: Stateless, JWT-based authentication applied across services for secure API access.
- 🧩 **Data Layer**: Each service uses its own **MongoDB** or **Redis** instance, based on its specific domain needs.
- 🐳 **Dockerized**: Every component runs in a **Docker container**, ready for CI/CD and consistent local dev.
- ☸️ **Kubernetes**: Full orchestration with **Kubernetes**, including live-reloading and deployment via **Skaffold**.

---

## 📦 Services

- `auth` – Handles signup, signin, signout, and JWT validation
- `client` – The frontend React/Next.js application
- `common` – Shared reusable logic and type-safe utilities across services
- `infra` – Kubernetes and deployment configuration (ingress, NATS, MongoDB, etc.)
- `tickets` – Ticket CRUD operations, event publishing, and ticket management
- `orders` – Order creation, management, and event publishing
- `payments` – Payment processing and integration
- `expiration` – Handles order expiration and timeouts
- `nats-test` – Utility service for testing NATS event bus

---

## 📁 Monorepo Structure

ticketing/
├── auth/ # Auth service
├── client/ # Frontend app (React + Next.js)
├── common/ # Shared npm package for logic & types
├── expiration/ # Expiration service for order timeouts
├── infra/ # Kubernetes manifests
├── nats-test/ # NATS event bus test utility
├── orders/ # Orders service
├── payments/ # Payments service
├── tickets/ # Tickets service
├── node_modules/
├── skaffold.yaml # Skaffold config for local dev
└── README.md # You're here!

---

## 🧪 Testing

Automated tests are implemented in the following services:

- `auth`
- `tickets`
- `orders`
- `payments`

To run tests for a service, navigate to its folder and execute:

```bash
cd <service>
npm run test
```

# 🧰 Prerequisites & Running Locally

To run the project locally, you’ll need:

- ✅ Docker Desktop
- ✅ Kubernetes enabled in Docker
- ✅ Skaffold installed ([Installation Guide](https://skaffold.dev/docs/install/))

---

## ▶️ Start the Application

Navigate to the root of the project and run:

```bash
skaffold dev
```

### This will:

Build all microservices

Start them inside Kubernetes

Expose the app via ingress-nginx (usually at http://ticketing.dev)

🧾 Update Your Hosts File
Make sure your /etc/hosts file includes:

```bash
127.0.0.1 ticketing.dev
```

🔐 Environment & Secrets
Secrets are managed manually using Kubernetes secrets. Before starting, you’ll need to create the JWT secret:

```bash
kubectl create secret generic jwt-secret --from-literal=JWT_KEY=your_jwt_key_here
```
