

describe('Team Builder Test', () => {
    it('can navigate to http://localhost:3000', () => {
        cy.visit('http://localhost:3000/pizza')
        cy.url().should('include', 'localhost')
    })
    describe("Inputs Test", () => {
        it('can get name input', () => {
            cy.get("input[name='name']")
            .type("AJ")
            .should("have.value", "AJ")
        })
    describe("Data Submission Test", () => {
        it("user can submit data", () => {
            cy.get('form').submit()
        })
    })
    
    })
})