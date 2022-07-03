<%- lib.renderOpening() %>

# Background

> Agile Avatars makes it quick and easy to know who's working on what with great looking avatars for your agile board. No more fiddling with Word or Google Docs making sure everything aligns just right. Simply drag and drop your images, make some adjustments, print, and laminate!

<%- await renderImage('readme-files/demo.gif', 'Agile Avatars in action') %>

Agile Avatars is also an experiment in developing a web application under an extreme set of constraints designed to preclude mainstream solutions. Bare in mind that Agile Avatars is small and doesn't necessarily cover every concern found in a typical web application. It does however do enough to present some interesting design challenges, especially around code organisation, dependency management, state management and view rendering. 

The solutions are designed around the needs of this application at this point in time. The design is intended to be evolvable through refactoring as the needs of the application change over time. The intent is to see what kind of design emerges as a result of an extreme set of constraints.

# Getting Started

<%- await renderSection('getting-started') %>

# Design Goals

<%- await renderSection('design-goals') %>

# Technical Constraints

<%- await renderSection('technical-constraints') %>

# Architecture

<%- await renderSection('architecture') %>

# Launching

<%- await renderSection('launching') %>

# Composing

<%- await renderSection('composing') %>

# Modules

<%- await renderSection('modules') %>

# List of Modules

Following is a complete list of modules in Agile Avatars.

The diff-like block lists the collaborators in green and the non-collaborators in red.

<%- await modules %>

# State Management

<%- await renderSection('state-management') %>

# View Rendering

<%- await renderSection('view-rendering') %>

# Testing 

<%- await renderSection('testing') %>

# Dependencies

<%- await renderSection('dependencies') %>

# List of Production Dependencies

<%- await dependencies.production %>

# List of Development Dependencies

<%- await dependencies.development %>

# Functional Programming

<%- await renderSection('functional-programming') %>

# Conventions

<%- await renderSection('conventions') %>
