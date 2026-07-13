# Jira Clone

A kanban-style project management tool — workspaces, projects, drag-and-drop
boards, comments, and due dates. Built as a learning project.

## Tech stack
- React + Vite
- Redux Toolkit (state management)
- React Router (routing)
- Firebase (Authentication + Firestore)
- @hello-pangea/dnd (drag and drop)

## Status
In progress — building phase by phase.
- [x] Phase 0 — Project setup, Firebase config, Redux store, routing
- [ ] Phase 1 — Authentication & protected routes
- [ ] Phase 2 — Workspaces & projects
- [ ] Phase 3 — Static board
- [ ] Phase 4 — Drag & drop
- [ ] Phase 5 — Comments & due dates
- [ ] Phase 6 — Realtime sync & security rules

## Running locally
1. Clone the repo and run `npm install`
2. Create a Firebase project (Auth + Firestore enabled)
3. Add a `.env` file in the root with your Firebase config:
