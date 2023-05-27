# Decode Age PDF Creator

This project allows you to generate PDF documents based on JSON data using the Decode Age PDF Creator. The generated PDFs are saved in AWS (Amazon Web Services) and the database (DB) associated with the project.

## Getting Started

To run the Decode Age PDF Creator project, follow these steps:

- **Clone the Repository:** `git clone <repository_url>`
- **Install Dependencies:** `npm install`
- **Start the Server:** `npm run dev`
  (The kafka consumer server will start running)
- **From Decode Age GraphQL API server send the Json Objet though kafka provider.**
- **Decode Age PDF Creator will generate the pdf from Json received from kafka.**
- **The generated pdf will get stored in Aws and MongoDB as url.**
