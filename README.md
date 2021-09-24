# Pokemon Challenge

[Live Site](https://optimistic-euclid-542841.netlify.app/)

## Installation Instructions

<details>
<summary> Short Installation instructions </summary>
1. Clone this repo onto your local machine
```
git clone https://github.com/LaLeonie/pokemon.git
```

2. Install dependencies

```
npm i
```

3. Start local server

```
npm start
```

4. Open your browser to **localhost:3000**
5. Optional: run tests

```
npm test
```

</details>

## Requirements

- [x] Display table with data from [Pokemon API](https://raw.githubusercontent.com/mrtonks/coding_challenges/main/pokedex.json)
- [x] Display following data for each entry:
  - Name
  - Number
  - Type
  - Height
  - Weight
  - Weaknesses
  - Next Evolution
  - Image
- [x] Data is sortable by name and number
- [x] Displays correctly on mobile and desktop

## Process

- [x] Planning: Wireframe & Component Tree (20 minutes)
- [x] Scafolding: Set up Repo, React App, Dependencies, File structure, Component Sceletons (40 minutes)
- [x] Static App: Api Call, Components (30 minutes)
- [x] Interactive App: Sort Functionalit with 2 dimensions (row, order) (30 minutes)
- [x] Testing (30 minutes)
- [x] Styling: Theme setup, styling (30 minutes)

Estimated Time: 3 hours

## Tech Stack

- React (with create-react-app)
- styled-components
- Jest
- React Testing Library
- React Bootstrap
- Axios

- Deployed on Netlify

## Design Decisions

- Desktop first design
- Dropdown Selection for sorting by name/number => can be easily extended to other rows
- Toggle Selection for ascending/descening

## Code Decision

- file structure: components divided into three folders
  - elements: (shared) presentational UI element components
  - Setting: components related to sorting
  - Table: components related to data display
- Separation of concern: helper functions extracted into custom hooks or utils files
- State Management: two states (order, sortingField) are managed with useState
- testing: focus on integration testing i.e. testing the 'happy paths'

## Stretch Goals

- [ ] Improve accessibility and performance
- [x] Improve mobile design by turning rows into cards
- [ ] Improve data handling in ListDisplay, i.e. dynamic error messsage when no data is available
- [ ] Improve design overall, particularly use of color
- [ ] Add Testing for edge cases and unit testing
- [ ] Improve code splitting for styled-components
