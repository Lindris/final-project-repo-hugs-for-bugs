/// <reference types="cypress" />

describe("Homepage", () => {
	before(() => {
		cy.visit("http://localhost:3001/create");
	});

	// it("should find the element with the classname of log-in-button and click it", () => {
	// 	cy.get(".log-in-button").click();
	// });

	// it("should find the element with the classname of input cdf74ce7b ce07c2f58 and add in an email", () => {
	// 	const email = "codecollabwebsite@gmail.com";
	// 	cy.get(".input cdf74ce7b ce07c2f58").type(`${email}{enter}`);
	// });

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
		const newDesc = "RESTFUL API";
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

	it("should find the element with the classname of tag-1-input and add in a tag", () => {
		const tag1 = "RESTFUL";
		cy.get(".tag-1-input").type(`${tag1}{enter}`);
	});

	it("should find the element with the classname of tag-2-input and add in a tag", () => {
		const tag2 = "API";
		cy.get(".tag-2-input").type(`${tag2}{enter}`);
	});

	it("should find the element with the classname of tag-3-input and add in a tag", () => {
		const tag3 = "CRUD";
		cy.get(".tag-3-input").type(`${tag3}{enter}`);
	});

	it("should find the element with the classname of submit-event-btn and click it", () => {
		cy.get(".submit-event-btn").click();
	});
});

// <input class="input cdf74ce7b ce07c2f58" inputmode="email" name="username" id="username" type="text" value="" required="" autocomplete="username" autocapitalize="none" spellcheck="false" autofocus=""></input>

// <input class="input cdf74ce7b ccd26e912" name="password" id="password" type="password" required="" autocomplete="current-password" autocapitalize="none" spellcheck="false"></input>
