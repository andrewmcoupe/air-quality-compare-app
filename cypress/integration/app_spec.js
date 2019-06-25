describe('Air Compare', function() {
	beforeEach(() => {
		cy.visit('/');
	});
	it('should display the dropdown list after typing into the search box', function() {
		cy.wait(2000);
		cy.get('#search').type('man', { force: true });
		cy.get('.location-list')
			.children()
			.should('have.length', 3);
	});

	it('should display a location card after clicking from the dropdown', function() {
		cy.wait(2000);
		cy.get('#search').type('man', { force: true });
		cy.get('.location-list')
			.children()
			.first()
			.click();
		cy.get('.location-card__container')
			.children()
			.should('have.length', 1);
	});

	it('should displaytwo location cards after selecting two locations from the dropdown', function() {
		cy.wait(2000);
		cy.get('#search').type('man');
		cy.get('.location-list')
			.children()
			.first()
			.click();

		cy.get('#search').type('lon');
		cy.get('.location-list')
			.children()
			.first()
			.click();
		cy.get('.location-card__container')
			.children()
			.should('have.length', 2);
	});

	it('should remove the location card when clicking the close icon', function() {
		cy.wait(2000);
		cy.get('#search').type('man', { force: true });
		cy.get('.location-list')
			.children()
			.first()
			.click();
		cy.get('.location-card__close-icon').click();
		cy.get('.location-card__container')
			.not('.location-card')
			.should('have.length', 1);
	});
});
