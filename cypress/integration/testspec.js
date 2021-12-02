describe('Integration test with visual testing', function() {

  context('Running in resolution', () => {
    beforeEach(() => {
      cy.viewport(1280, 720)
    })

    it('Loads the homepage', function() {
      // Load the page or perform any other interactions with the app.
      cy.visit(Cypress.env('tempurl'));

      //Verifying the content
      cy.get('h1').should('have.text', 'App & Browser Testing Made Easy')
      
      // Take a snapshot for visual diffing
      cy.percySnapshot('Homepage' ,{ widths: [375, 480, 720, 1280, 1440, 1920] })
    });

    it('Loads the Pricing page', function() {
      // Load the page or perform any other interactions with the app.
      //const url = Cypress.env('baseurl');
      cy.visit(Cypress.env('tempurl')+'/pricing');

      //Verifying the content
      cy.get('.plans-wrapper > :nth-child(1) > .live-element').should('have.text', 'Replace your device lab and VMs with any of these plans')
      
      // Take a snapshot for visual diffing
      cy.percySnapshot('Amount page',{ widths: [375, 480, 720, 1280, 1440, 1920] })
    });

    it('Loads the Integration autonmate page', function() {
      // Load the page or perform any other interactions with the app.
      cy.visit(Cypress.env('tempurl')+"/integrations/automate");
      
      //Verifying the content
      cy.get('h1').should('have.text', 'Integrations that make life easier')

      // Take a snapshot for visual diffing
      cy.percySnapshot('App page',{ widths: [375, 480, 720, 1280, 1440, 1920] })
    });

    it('Loads the Documents page', function() {
      // Load the page or perform any other interactions with the app.
      cy.visit(Cypress.env('tempurl')+"/docs");

      //Verifying the content
      cy.get('h1').should('have.text', 'Documentation')

      // Take a snapshot for visual diffing
      cy.percySnapshot('Help page'),{ widths: [375, 480, 720, 1280, 1440, 1920] }
    });
  });
});