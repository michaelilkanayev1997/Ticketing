# Ticketing Platform — Microservices-Based E-Commerce System

An advanced, production-grade microservices architecture built to power a full-featured ticketing and e-commerce system. This project serves as an end-to-end example of how to build, deploy, and scale a distributed application using modern technologies across the stack.

---

## 🚀 Overview

The Ticketing Platform is a cloud-native, event-driven application designed with scalability, maintainability, and performance in mind. It demonstrates how enterprise-level systems are architected using microservices, asynchronous messaging, secure authentication, and CI/CD workflows — all within a fully containerized Kubernetes environment.

---

## 🏗️ Architecture

- **Frontend**: Server-Side Rendered (SSR) React app using **Next.js**, optimized for SEO and performance.
- **Services**: Each business domain (auth, orders, tickets, payments, etc.) is implemented as its own **isolated microservice** using **Node.js + Express**.
- **Event Bus**: Real-time inter-service communication via a custom-built, lightning-fast **event bus** using **NATS Streaming**.
- **Shared Code**: Common logic and TypeScript types are abstracted into a reusable **NPM package** (`@michaelil/common`), consumed across all services.
- **Authentication**: JWT-based authentication and authorization applied across services.
- **Data Layer**: Services use either **MongoDB** or **Redis**, chosen based on domain-specific needs.
- **Infrastructure**: Entire application runs in **Docker containers** orchestrated by **Kubernetes**, fully ready for cloud deployment.

---

## 🧱 Core Features

- ⚙️ **Microservices Architecture** — Clean domain separation and async communication between services
- 📡 **Event-Based Communication** — Services stay loosely coupled and scalable via an internal event bus
- 🔐 **Secure Auth** — Stateless JWT authentication with access control across all APIs
- 📦 **Reusable Shared Code** — Type-safe interfaces and middlewares shared using a private NPM package
- 🌍 **Frontend** — Built with React + Next.js, including SSR for better performance
- 🐳 **Fully Dockerized** — Every component runs in a container, built for CI/CD and cloud-native deployment
- ☸️ **Kubernetes-Ready** — Includes manifests and Skaffold config for seamless local and cloud development

---

## 📦 Services (So Far...)

- `auth` – Handles signup, signin, signout, and JWT validation
- `client` – The frontend React/Next.js application
- `common` – Shared reusable logic and type-safe utilities across services
- `infra` – Kubernetes and deployment configuration (ingress, NATS, MongoDB, etc.)

More services (orders, payments, expiration, tickets) coming soon...

---

## 🧠 What You’ll Learn by Studying This Project

- Architecting real-world microservice-based applications
- Solving challenges in **distributed systems** like data consistency, event ordering, and service discovery
- Building **scalable event-driven applications** using **NATS Streaming**
- Writing **custom shared libraries** as NPM packages for cross-service code reuse
- Securing services with **JWT-based auth middleware**
- Handling **graceful shutdowns**, error boundaries, and testing at the microservice level
- Deploying everything using **Docker**, **Kubernetes**, and optionally a cloud provider

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

## 📁 Monorepo Structure

ticketing/
├── auth/ # Auth service
├── client/ # Frontend app (React + Next.js)
├── common/ # Shared npm package for logic & types
├── infra/ # Kubernetes manifests
├── node_modules/
├── skaffold.yaml # Skaffold config for local dev
└── README.md # You're here!

---

## 🧪 Testing

Each microservice includes:

- **Unit tests** for business logic
- **Integration tests** for API and database layers
- Automated test runners using `Jest` and `Supertest`

---

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

This will:

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
