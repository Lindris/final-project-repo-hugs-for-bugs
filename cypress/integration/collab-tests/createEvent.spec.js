/// <reference types="cypress" />

describe("Create-event", () => {
	before(() => {
		cy.visit("http://localhost:3001/create");
		cy.login();
	});

	it("displays a string 'Event type' on the page", () => {
		cy.contains("Event type");
	});
	it("should contain the element <Box/>", () => {
		cy.get("<Box/>");
	});

	it("should find the element with the classname of event-type-selector and select Code Club", () => {
		cy.get(".event-type-selector")
			.select("Code Club")
			.should("have.value", "Code Club");
	});

	it("should find the element with the classname of event-desc-input and type RESTFUL API", () => {
		const newDesc = "TEST EVENT 2";
		cy.get(".event-desc-input").type(`${newDesc}{enter}`);
		cy.get(".event-desc-input").should("have.value", newDesc);
	});

	it("should find the element with the classname of meeting-url-input and type in a url", () => {
		const newURL = "https://zoom.us/j/974222?I";
		cy.get(".meeting-url-input").type(`${newURL}{enter}`);
		cy.get(".meeting-url-input").should("have.value", newURL);
	});

	it("should find the element with the classname of date-input and add in a date", () => {
		const date = "March 31 2022";
		cy.get(".date-input").type(`${date}{enter}`);
	});

	it("should find the element with the classname of start-time-input and add in a time", () => {
		const time = "1:00 PM";
		cy.get(".start-time-input").type(`${time}{enter}`);
	});

	it("should find the element with the classname of end-time-input and add in a time", () => {
		const time = "5:00 PM";
		cy.get(".end-time-input").type(`${time}{enter}`);
	});

	it("should find the element with the classname of tag-3-input and add in a tag", () => {
		const tag3 = "TESTING";
		cy.get(".tag-3-input").type(`${tag3}{enter}`);
	});

	it("should login", () => {
		cy.request("/api/auth/me").then(({ body: user }) => {
			expect(user.email).to.equal(Cypress.env("auth0Username"));
		});
	});

	it("should find the element with the classname of submit-event-btn and click it", () => {
		cy.get(".submit-event-btn").click();
	});

	it("should find the element with the classname of button-2 and click it", () => {
		cy.get(".button-2").click();
	});
});
